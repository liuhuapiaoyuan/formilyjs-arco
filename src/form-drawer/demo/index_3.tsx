import React from 'react'
import {
  FormLayout,
  FormDrawer,
  FormItem,
  Input,
  FormButtonGroup,
  Submit,
  Reset,
} from '@formily/arco'
import { Field } from '@formily/react'
import { Button } from '@arco-design/web-react'

export default () => (
  <Button
    onClick={() => {
      FormDrawer('弹窗表单', (resolve) => (
        <FormLayout labelCol={6} wrapperCol={10}>
          <Field
            name="aaa"
            required
            title="输入框1"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="bbb"
            required
            title="输入框2"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="ccc"
            required
            title="输入框3"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="ddd"
            required
            title="输入框4"
            decorator={[FormItem]}
            component={[Input]}
          />
          <FormDrawer.Footer>
            <FormButtonGroup align="right">
              <Submit
                onSubmit={() => {
                  return new Promise((resolve) => {
                    setTimeout(resolve, 1000)
                  })
                }}
              >
                提交
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
        .then(console.log)
    }}
  >
    点我打开表单
  </Button>
)
