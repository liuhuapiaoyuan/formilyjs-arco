import React, { useState } from 'react'
import { Form, Reset, Upload, FormItem } from '@formily/semi'
import { createForm } from '@formily/core'
import { FormConsumer, Field, FormProvider } from '@formily/react'
import { Input, Typography } from '@arco-design/web-react'

const form = createForm({
  initialValues: {
    input: 'sadsa',
    upload: [
      {
        name: 'temp.png',
        url: 'https://secure.gravatar.com/avatar/b0de023b7c0d631fe1c283d0389cd72c?s=800&d=identicon',
      },
    ],
  },
})

const NormalUpload = (props) => {
  console.log('normal upload: ', props.fileList, props)
  return <Upload {...props} />
}

const Demo = () => {
  const [a, seta] = useState('')
  return (
    <FormProvider form={form}>
      <Input value={a} onChange={seta} />
      <div>{a}</div>
      <Field
        name="input"
        component={[
          Input,
          {
            placeholder: '请输入',
            allowClear: true,
          },
        ]}
      />
      <Field
        name="upload"
        title="上传"
        required
        decorator={[FormItem]}
        component={[
          NormalUpload,
          {
            onChange: (...p) => console.log('upload onChange: ', ...p),
            action: 'https://arco.design/api/upload',
          },
        ]}
      />
      <Field
        name="images"
        title="传图"
        required
        decorator={[FormItem]}
        component={[
          Upload,
          {
            listType: 'picture-card',
            accept: 'image/*',
            onChange: (...p) => console.log('upload onChange: ', ...p),
            action: 'https://arco.design/api/upload',
          },
        ]}
      />
      <Reset>Reset</Reset>
      <FormConsumer>
        {() => (
          <Typography.Text code>{JSON.stringify(form.values)}</Typography.Text>
        )}
      </FormConsumer>
    </FormProvider>
  )
}

export default Demo
