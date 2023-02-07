import React from 'react';
import { FormDialog, FormItem, FormLayout, Input } from '@formily/arco';
import { Field } from '@formily/react';
import { Button } from '@arco-design/web-react';
export default (function () { return (React.createElement(Button, { onClick: function () {
        FormDialog('弹窗表单', function () { return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
            React.createElement(Field, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", decorator: [FormItem], component: [Input] }),
            React.createElement(Field, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", decorator: [FormItem], component: [Input] }),
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
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_3.js.map