import React from 'react'
import { Form, SchemaRender, Reset, Submit } from '@formily/arco'
import { createForm } from '@formily/core'
import { FormConsumer } from '@formily/react'
import config from './config'

const form = createForm({})

const Demo = () => (
  <Form form={form}>
    <SchemaRender schema={config} />
    <Reset>Reset</Reset>
    <Submit>Submit</Submit>
    <FormConsumer>
      {() => <div>{JSON.stringify(form.values)}</div>}
    </FormConsumer>
  </Form>
)

export default Demo
