import React, { createContext, useContext } from 'react';
import { FormDialog, FormItem, FormLayout, Input } from '@formily/arco';
import { createSchemaField } from '@formily/react';
import { Button } from '@arco-design/web-react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        Input: Input,
    },
});
var Context = createContext(null);
var PortalId = '可以传，也可以不传的ID，默认是form-dialog';
export default (function () { return (React.createElement(Context.Provider, { value: "\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u53EF\u4EE5\u76F4\u63A5\u4F20\u5230\u5F39\u7A97\u5185\u90E8\uFF0C\u53EA\u9700\u8981ID\u4E00\u81F4\u5373\u53EF" },
    React.createElement(FormDialog.Portal, { id: PortalId },
        React.createElement(Button, { onClick: function () {
                FormDialog('弹窗表单', PortalId, function (form) {
                    console.log(useContext(Context));
                    return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
                        React.createElement(SchemaField, null,
                            React.createElement(SchemaField.String, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", "x-decorator": "FormItem", "x-component": "Input" }),
                            React.createElement(SchemaField.String, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", "x-decorator": "FormItem", "x-component": "Input" }),
                            React.createElement(SchemaField.String, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", "x-decorator": "FormItem", "x-component": "Input" }),
                            React.createElement(SchemaField.String, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", "x-decorator": "FormItem", "x-component": "Input" })),
                        React.createElement(FormDialog.Footer, null,
                            React.createElement("span", { style: { marginLeft: 4 } },
                                "\u6269\u5C55\u6587\u6848\uFF1A",
                                form.values.aaa))));
                })
                    .forOpen(function (formInst, next) {
                    setTimeout(function () {
                        next({
                            initialValues: {
                                aaa: '123',
                            },
                        });
                    }, 1000);
                })
                    .forConfirm(function (formInst, next) {
                    setTimeout(function () {
                        console.log(formInst);
                        next(formInst);
                    }, 1000);
                })
                    .forCancel(function (formInst, next) {
                    setTimeout(function () {
                        console.log(formInst);
                        next(formInst);
                    }, 1000);
                })
                    .open()
                    .then(console.log)
                    .catch(console.error);
            } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")))); });
//# sourceMappingURL=index_1.js.map