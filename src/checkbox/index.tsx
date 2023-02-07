import { connect, mapProps } from '@formily/react'
import { Checkbox as ArcoCheckbox } from '@arco-design/web-react'
import type { CheckboxProps } from '@arco-design/web-react/es/checkbox'
import type { CheckboxGroupProps } from '@arco-design/web-react/es/checkbox/interface'
import CheckboxGroup from '../checkbox-group'
import { ReactText } from 'react'

type ComposedCheckbox<T extends ReactText = any> = React.FC<
  CheckboxProps<T>
> & {
  Group: React.FC<CheckboxGroupProps<T>>
}

export const Checkbox: ComposedCheckbox = connect(
  ArcoCheckbox,
  mapProps({
    value: 'checked',
    onInput: 'onChange',
  })
) as unknown as ComposedCheckbox

Checkbox.Group = CheckboxGroup

export default Checkbox
