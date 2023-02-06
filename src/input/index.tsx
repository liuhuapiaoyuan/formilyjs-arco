import React from 'react'
import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'
import { Input as ArcoInput } from '@arco-design/web-react'
import { IconLoading } from '@arco-design/web-react/icon'
import type { InputProps } from '@arco-design/web-react/es/input'
import './index.scss'
import { PreviewText } from '../preview-text'
const ArcoInputTextArea = ArcoInput.TextArea

const InternalInput: ReactFC<InputProps> = connect(
  ArcoInput,
  mapProps(
    {
      value: 'value',
    },
    (props, field) => {
      return {
        ...props,
        suffix: (
          <span>
            {field?.['loading'] || field?.['validating'] ? (
              <IconLoading spin />
            ) : (
              props.suffix
            )}
          </span>
        ),
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)
const TextArea = connect(
  ArcoInputTextArea,
  mapProps({
    value: 'value',
  }),
  mapReadPretty(PreviewText.Input)
)

export const Input = Object.assign(InternalInput, {
  TextArea,
})

export default Input
