import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormDrawer, FormLayout, Reset, } from '@formily/arco';
import { Button, Modal } from '@arco-design/web-react';
function delay(timeout) {
    return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
}
export default (function () { return (React.createElement(Button, { onClick: function () {
        FormDrawer('抽屉表单', function () { return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
            React.createElement(SchemaField, null,
                React.createElement(SchemaField.String, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", "x-decorator": "FormItem", "x-component": "Input" })),
            React.createElement(FormDrawer.Footer, null,
                React.createElement(FormButtonGroup, { align: "right" },
                    React.createElement(Submit, { onSubmit: function (values) {
                            return delay(1000).then(function () {
                                alert('提交后，抛出异常 阻止提交:' + JSON.stringify(values));
                                return Promise.reject('提交失败');
                            });
                        } },
                        ' ',
                        "\u63D0\u4EA4",
                        ' '),
                    React.createElement(Reset, null, "\u91CD\u7F6E"))))); })
            .open({
            initialValues: {
                aaa: '123',
            },
        })
            .then(function (values) {
            Modal.success({
                title: '提交成功',
                content: React.createElement("div", null,
                    "\u63D0\u4EA4\u6570\u636E:",
                    JSON.stringify(values)),
            });
        })
            .catch(function (values) {
            Modal.error({
                title: '提交失败',
                content: React.createElement("div", null,
                    "\u63D0\u4EA4\u6570\u636E:",
                    JSON.stringify(values)),
            });
        });
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_1.js.map