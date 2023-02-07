import React from 'react'
import {
  FormDrawer,
  FormLayout,
  Submit,
  Reset,
  FormButtonGroup,
  SchemaRender,
} from '@formily/arco'
import { Button } from '@arco-design/web-react'
import { Form } from '@formily/core'

const schema = {
  type: 'object',
  properties: {
    aaa: {
      type: 'string',
      title: '输入框1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bbb: {
      type: 'string',
      title: '输入框2',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ccc: {
      type: 'string',
      title: '输入框3',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ddd: {
      type: 'string',
      title: '输入框4',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

export default () => (
  <Button
    onClick={() => {
      FormDrawer('弹窗表单', () => (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaRender schema={schema} />
          <FormDrawer.Footer>
            <FormButtonGroup align="right">
              {/* 此处处理提交内容 */}
              <Submit onSubmit={console.log}>提交</Submit>
              <Reset>重置</Reset>
            </FormButtonGroup>
          </FormDrawer.Footer>
        </FormLayout>
      ))
        .forOpen((form, next) => {
          setTimeout(() => {
            next({
              initialValues: {
                aaa: '123',
              },
            })
          }, 1000)
        })
        .open()
        .then(console.log)
    }}
  >
    点我打开表单
  </Button>
)
