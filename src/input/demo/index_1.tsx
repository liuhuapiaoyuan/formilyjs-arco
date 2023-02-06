import React, { useRef } from 'react'
import { Input, FormItem, FormButtonGroup, Submit } from '@formily/semi'
import { createForm, onFieldValueChange } from '@formily/core'
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react'
import { Button } from '@arco-design/web-react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

export default () => {
  const form = useRef(
    createForm({
      initialValues: {
        input: '吃是',
      },
    })
  ).current
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="input"
          title="输入框"
          description="宽度240px"
          x-decorator="FormItem"
          x-component="Input"
          required
          x-component-props={{
            style: {
              width: 240,
            },
          }}
        />
        <SchemaField.String
          name="textarea"
          title="文本框"
          x-decorator="FormItem"
          required
          x-component="Input.TextArea"
          x-component-props={{
            style: {
              width: 400,
            },
          }}
        />
      </SchemaField>
      <FormConsumer>
        {() => (
          <code>
            <pre>{JSON.stringify(form.values, null, 2)}</pre>
          </code>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
