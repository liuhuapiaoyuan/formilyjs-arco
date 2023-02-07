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
  createPortalProvider,
  createPortalRoot,
  loading,
} from '../__builtins__'

function isPromise(obj) {
  return (
    !!obj && //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
    (typeof obj === 'object' || typeof obj === 'function') && // 初始promise 或 promise.then返回的
    typeof obj.then === 'function'
  )
}
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

/**
 * 渲染一个弹窗
 * @param title
 * @param id
 * @param renderer
 * @returns
 */
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
  const drawer: IDrawerProps = {
    width: '40%',
    ...props,
    onCancel: (e: any) => {
      if (props?.onCancel?.(e) !== false) {
        formDrawer.close()
      }
    },
    afterClose() {
      props?.afterClose?.()
      root.unmount()
    },
  }

  const DrawerContent = observer(() => (
    <Fragment>{isFn(renderer) ? renderer(env.form) : renderer}</Fragment>
  ))

  const renderDrawer = (visible = true) => (
    <Drawer footer={null} {...drawer} visible={visible}>
      {env.form ? (
        <FormProvider form={env.form}>
          <DrawerContent />
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
    open: async (drawerProps: IFormProps) => {
      if (env.promise) {
        return env.promise
      }
      env.promise = new Promise<object>(async (resolve, reject) => {
        drawerProps = await loading(drawer.loadingText, () =>
          applyMiddleware(drawerProps, env.openMiddlewares)
        )
        try {
          env.form =
            env.form ||
            createForm({
              ...drawerProps,
              effects(form) {
                onFormSubmitSuccess(() => {
                  resolve(toJS<object>(form.values))
                  formDrawer.close()
                })
                drawerProps?.effects?.(form)
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
  const prefixCls = 'arco-drawer'
  useLayoutEffect(() => {
    const content = ref.current?.closest(`.${prefixCls}-scroll`)
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
