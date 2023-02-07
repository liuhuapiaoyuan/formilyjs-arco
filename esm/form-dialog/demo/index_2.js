import React from 'react';
import { FormDialog, FormItem, FormLayout, Input } from '@formily/arco';
import { createSchemaField } from '@formily/react';
import { Button } from '@arco-design/web-react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        Input: Input,
    },
});
var schema = {
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
};
export default (function () { return (React.createElement(FormDialog.Portal, null,
    React.createElement(Button, { onClick: function () {
            FormDialog('弹窗表单', function () { return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
                React.createElement(SchemaField, { schema: schema }),
                React.createElement(FormDialog.Footer, null,
                    React.createElement("span", { style: { marginLeft: 4 } }, "\u6269\u5C55\u6587\u6848")))); })
                .forOpen(function (form, next) {
                setTimeout(function () {
                    next({
                        initialValues: {
                            aaa: '123',
                        },
                    });
                }, 1000);
            })
                .forConfirm(function (form, next) {
                setTimeout(function () {
                    console.log(form);
                    next(form);
                }, 1000);
            })
                .forCancel(function (form, next) {
                setTimeout(function () {
                    console.log(form);
                    next(form);
                }, 1000);
            })
                .open()
                .then(console.log);
        } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355"))); });
//# sourceMappingURL=index_2.js.map