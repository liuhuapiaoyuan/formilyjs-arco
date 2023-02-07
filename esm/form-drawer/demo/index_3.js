import React from 'react';
import { FormLayout, FormDrawer, FormItem, Input, FormButtonGroup, Submit, Reset, } from '@formily/arco';
import { Field } from '@formily/react';
import { Button } from '@arco-design/web-react';
export default (function () { return (React.createElement(Button, { onClick: function () {
        FormDrawer('弹窗表单', function (resolve) { return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
            React.createElement(Field, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", decorator: [FormItem], component: [Input] }),
            React.createElement(FormDrawer.Footer, null,
                React.createElement(FormButtonGroup, { align: "right" },
                    React.createElement(Submit, { onSubmit: function () {
                            return new Promise(function (resolve) {
                                setTimeout(resolve, 1000);
                            });
                        } }, "\u63D0\u4EA4"),
                    React.createElement(Reset, null, "\u91CD\u7F6E"))))); })
            .open({
            initialValues: {
                aaa: '123',
            },
        })
            .then(console.log);
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_3.js.map