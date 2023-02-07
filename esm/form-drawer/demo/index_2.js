import React from 'react';
import { FormDrawer, FormLayout, Submit, Reset, FormButtonGroup, SchemaRender, } from '@formily/arco';
import { Button } from '@arco-design/web-react';
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
export default (function () { return (React.createElement(Button, { onClick: function () {
        FormDrawer('弹窗表单', function () { return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
            React.createElement(SchemaRender, { schema: schema }),
            React.createElement(FormDrawer.Footer, null,
                React.createElement(FormButtonGroup, { align: "right" },
                    React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"),
                    React.createElement(Reset, null, "\u91CD\u7F6E"))))); })
            .forOpen(function (form, next) {
            setTimeout(function () {
                next({
                    initialValues: {
                        aaa: '123',
                    },
                });
            }, 1000);
        })
            .open()
            .then(console.log);
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_2.js.map