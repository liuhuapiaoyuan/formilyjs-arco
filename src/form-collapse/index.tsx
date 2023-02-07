import React, { Fragment, useMemo } from 'react'
import { Collapse, Badge } from '@arco-design/web-react'
import { model } from '@formily/reactive'
import { CollapseProps } from '@arco-design/web-react/es/collapse'
import { CollapseItemProps } from '@arco-design/web-react/es/collapse'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import { Schema, SchemaKey } from '@formily/json-schema'
import cls from 'classnames'
import { usePrefixCls } from '../__builtins__'
import { toArr } from '@formily/shared'

type ActiveKeys = string | number | Array<string | number>

type ActiveKey = string | number
interface IFormCollapse {
  activeKeys: ActiveKeys
  hasActiveKey(key: ActiveKey): boolean
  setActiveKeys(key: ActiveKeys): void
  addActiveKey(key: ActiveKey): void
  removeActiveKey(key: ActiveKey): void
  toggleActiveKey(key: ActiveKey): void
}

interface IFormCollapseProps extends CollapseProps {
  formCollapse?: IFormCollapse
}

type ComposedFormCollapse = React.FC<IFormCollapseProps> & {
  CollapsePanel?: React.FC<CollapseItemProps>
  createFormCollapse?: (defaultActiveKeys?: ActiveKeys) => IFormCollapse
}

const usePanels = () => {
  const collapseField = useField()
  const schema = useFieldSchema()
  const panels: { name: SchemaKey; props: any; schema: Schema }[] = []
  schema.mapProperties((schema, name) => {
    const field = collapseField.query(collapseField.address.concat(name)).take()
    if (field?.display === 'none' || field?.display === 'hidden') {
      return
    }
    if (schema['x-component']?.indexOf('CollapsePanel') > -1) {
      panels.push({
        name,
        props: {
          ...schema?.['x-component-props'],
          key: schema?.['x-component-props']?.key || name,
          name: schema?.['x-component-props']?.name || name,
        },
        schema,
      })
    }
  })
  return panels
}

const createFormCollapse = (defaultActiveKeys?: ActiveKeys) => {
  const formCollapse = model({
    activeKeys: defaultActiveKeys || [],
    setActiveKeys(keys: ActiveKeys) {
      formCollapse.activeKeys = keys
    },
    hasActiveKey(key: ActiveKey) {
      if (Array.isArray(formCollapse.activeKeys)) {
        if (formCollapse.activeKeys.includes(key)) {
          return true
        }
      } else if (formCollapse.activeKeys == key) {
        return true
      }
      return false
    },
    addActiveKey(key: ActiveKey) {
      if (formCollapse.hasActiveKey(key)) {
        return
      }
      formCollapse.activeKeys = toArr(formCollapse.activeKeys).concat(key)
    },
    removeActiveKey(key: ActiveKey) {
      if (Array.isArray(formCollapse.activeKeys)) {
        formCollapse.activeKeys = formCollapse.activeKeys.filter(
          (item) => item != key
        )
      } else {
        formCollapse.activeKeys = ''
      }
    },
    toggleActiveKey(key: ActiveKey) {
      if (formCollapse.hasActiveKey(key)) {
        formCollapse.removeActiveKey(key)
      } else {
        formCollapse.addActiveKey(key)
      }
    },
  })
  return formCollapse
}

export const FormCollapse: ComposedFormCollapse = observer(
  ({ formCollapse, ...props }) => {
    const field = useField()
    const panels = usePanels()
    const prefixCls = usePrefixCls('collapse')
    const _formCollapse = useMemo(
      () => formCollapse ?? createFormCollapse(props.defaultActiveKey),
      [formCollapse, props.defaultActiveKey]
    )
    const activeKey = props.activeKey || _formCollapse?.activeKeys

    const badgedHeader = (key: SchemaKey, props: any) => {
      const errors = field.form.queryFeedbacks({
        type: 'error',
        address: `${field.address.concat(key)}.*`,
      })
      if (errors.length) {
        return (
          <Badge className="errors-badge" count={errors.length}>
            {props.header}
          </Badge>
        )
      }
      return props.header
    }
    return (
      <div>
        <div>{JSON.stringify(activeKey)}</div>
        <Collapse
          {...props}
          className={cls(prefixCls, props.className)}
          activeKey={`${activeKey}` as CollapseProps['activeKey']}
          onChange={(key, keys, e) => {
            props?.onChange?.(key, keys, e)
            _formCollapse?.setActiveKeys?.(key)
          }}
        >
          {panels.map(({ props, schema, name }, index) => (
            <Collapse.Item
              key={index}
              {...props}
              header={badgedHeader(name, props)}
              destroyOnHide={false}
            >
              <RecursionField schema={schema} name={name} />
            </Collapse.Item>
          ))}
        </Collapse>
      </div>
    )
  }
)

const CollapsePanel: React.FC<CollapseItemProps> = ({ children }) => (
  <Fragment>{children}</Fragment>
)

FormCollapse.CollapsePanel = CollapsePanel
FormCollapse.createFormCollapse = createFormCollapse

export default FormCollapse
