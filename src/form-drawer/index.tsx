import React, { Fragment, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  createForm,
  IFormProps,
  Form,
  onFormSubmitSuccess,
} from '@formily/core'
import { toJS } from '@formily/reactive'
import { FormProvider, observer } from '@formily/react'
import {
  isNum,
  isStr,
  isBool,
  isFn,
  IMiddleware,
  applyMiddleware,
} from '@formily/shared'
import { Drawer } from '@arco-design/web-react'
import { DrawerProps } from '@arco-design/web-react/es/Drawer'
import {
  usePrefixCls,
  createPortalProvider,
  createPortalRoot,
  loading,
} from '../__builtins__'

type FormDrawerRenderer =
  | React.ReactElement
  | ((form: Form) => React.ReactElement)

type Title = string | number | React.ReactElement

const isTitleComp = (props: any): props is Title =>
  isNum(props) || isStr(props) || isBool(props) || React.isValidElement(props)

const getDrawerProps = (props: any): IDrawerProps => {
  if (isTitleComp(props)) {
    return {
      title: props,
    }
  } else {
    return props
  }
}
export interface IFormDrawer {
  open(props?: IFormProps): Promise<any>
  forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer
  close(): void
}
export interface IDrawerProps extends Omit<DrawerProps, 'onCancel'> {
  loadingText?: React.ReactNode
  onCancel?: (e: any) => void | Promise<any> | boolean
}
export function FormDrawer(
  title: IDrawerProps,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export function FormDrawer(
  title: IDrawerProps,
  id: FormDrawerRenderer
): IFormDrawer
export function FormDrawer(
  title: Title,
  id: string,
  renderer: FormDrawerRenderer
): IFormDrawer
export function FormDrawer(title: Title, id: FormDrawerRenderer): IFormDrawer
export function FormDrawer(title: any, id: any, renderer?: any): IFormDrawer {
  if (isFn(id) || React.isValidElement(id)) {
    renderer = id
    id = 'form-drawer'
  }
  const env: {
    host: HTMLElement
    form: Form | null
    promise: Promise<any> | null
    openMiddlewares: IMiddleware<IFormProps>[]
  } = {
    host: document.createElement('div'),
    form: null,
    promise: null,
    openMiddlewares: [],
  }
  const root = createPortalRoot(env.host, id)
  const props = getDrawerProps(title)
  const drawer = {
    width: '40%',
    ...props,
    onCancel: (e: any) => {
      if (props?.onCancel?.(e) !== false) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        formDrawer.close()
      }
    },
    afterVisibleChange: (visible: boolean) => {
      if (visible) {
        props?.afterOpen()
        return
      } else {
        props?.afterClose()
        root.unmount()
      }
    },
  }

  const SideSheetContent = observer(() => (
    <Fragment>{isFn(renderer) ? renderer(env.form) : renderer}</Fragment>
  ))

  const renderDrawer = (visible = true) => (
    <Drawer {...drawer} visible={visible}>
      {env.form ? (
        <FormProvider form={env.form}>
          <SideSheetContent />
        </FormProvider>
      ) : null}
    </Drawer>
  )

  document.body.appendChild(env.host)
  const formDrawer = {
    forOpen: (middleware: IMiddleware<IFormProps>) => {
      if (isFn(middleware)) {
        env.openMiddlewares.push(middleware)
      }
      return formDrawer
    },
    open: async (sideSheetProps: IFormProps) => {
      if (env.promise) {
        return env.promise
      }
      env.promise = new Promise(async (resolve, reject) => {
        try {
          sideSheetProps = await loading(drawer.loadingText, () =>
            applyMiddleware(sideSheetProps, env.openMiddlewares)
          )
          env.form =
            env.form ||
            createForm({
              ...sideSheetProps,
              effects(form) {
                onFormSubmitSuccess(() => {
                  resolve(toJS(form.values))
                  formDrawer.close()
                })
                sideSheetProps?.effects?.(form)
              },
            })
        } catch (e) {
          reject(e)
        }
        root.render(() => renderDrawer(false))
        setTimeout(() => {
          root.render(() => renderDrawer(true))
        }, 16)
      })
      return env.promise
    },
    close: () => {
      if (!env.host) {
        return
      }
      root.render(() => renderDrawer(false))
    },
  }
  return formDrawer
}

const DrawerFooter: React.FC = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [footer, setFooter] = useState<HTMLDivElement>()
  const footerRef = useRef<HTMLDivElement>()
  const prefixCls = usePrefixCls('', {
    prefixCls: 'semi-sidesheet',
  })
  useLayoutEffect(() => {
    const content = ref.current?.closest(`.${prefixCls}-content`)
    if (content) {
      if (!footerRef.current) {
        footerRef.current = content.querySelector(
          `.${prefixCls}-footer`
        ) as HTMLDivElement
        if (!footerRef.current) {
          footerRef.current = document.createElement('div')
          footerRef.current.classList.add(`${prefixCls}-footer`)
          content.appendChild(footerRef.current)
        }
      }
      setFooter(footerRef.current)
    }
  })

  footerRef.current = footer

  return (
    <div ref={ref} style={{ display: 'none' }}>
      {footer && createPortal(props.children, footer)}
    </div>
  )
}

FormDrawer.Footer = DrawerFooter

FormDrawer.Portal = createPortalProvider('form-drawer')

export default FormDrawer
