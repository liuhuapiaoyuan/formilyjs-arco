import React from 'react'
import {
  FormButtonGroup,
  Submit,
  SchemaField,
  FormDrawer,
  FormLayout,
  Reset,
} from '@formily/arco'
import { Button, Modal } from '@arco-design/web-react'

function delay(timeout: number) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
export default () => (
  <Button
    onClick={() => {
      FormDrawer('抽屉表单', () => (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaField>
            <SchemaField.String
              name="aaa"
              required
              title="输入框1"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="bbb"
              required
              title="输入框2"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="ccc"
              required
              title="输入框3"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="ddd"
              required
              title="输入框4"
              x-decorator="FormItem"
              x-component="Input"
            />
          </SchemaField>
          <FormDrawer.Footer>
            <FormButtonGroup align="right">
              <Submit
                onSubmit={(values) => {
                  return delay(1000).then(() => {
                    alert('提交后，抛出异常 阻止提交:' + JSON.stringify(values))
                    return Promise.reject('提交失败')
                  })
                }}
              >
                {' '}
                提交{' '}
              </Submit>
              <Reset>重置</Reset>
            </FormButtonGroup>
          </FormDrawer.Footer>
        </FormLayout>
      ))
        .open({
          initialValues: {
            aaa: '123',
          },
        })
        .then((values) => {
          Modal.success({
            title: '提交成功',
            content: <div>提交数据:{JSON.stringify(values)}</div>,
          })
        })
        .catch((values) => {
          Modal.error({
            title: '提交失败',
            content: <div>提交数据:{JSON.stringify(values)}</div>,
          })
        })
    }}
  >
    点我打开表单
  </Button>
)
