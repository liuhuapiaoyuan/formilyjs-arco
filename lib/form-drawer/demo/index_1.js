"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var web_react_1 = require("@arco-design/web-react");
function delay(timeout) {
    return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
}
exports.default = (function () { return (react_1.default.createElement(web_react_1.Button, { onClick: function () {
        (0, arco_1.FormDrawer)('抽屉表单', function () { return (react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
            react_1.default.createElement(arco_1.SchemaField, null,
                react_1.default.createElement(arco_1.SchemaField.String, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", "x-decorator": "FormItem", "x-component": "Input" })),
            react_1.default.createElement(arco_1.FormDrawer.Footer, null,
                react_1.default.createElement(arco_1.FormButtonGroup, { align: "right" },
                    react_1.default.createElement(arco_1.Submit, { onSubmit: function (values) {
                            return delay(1000).then(function () {
                                alert('提交后，抛出异常 阻止提交:' + JSON.stringify(values));
                                return Promise.reject('提交失败');
                            });
                        } },
                        ' ',
                        "\u63D0\u4EA4",
                        ' '),
                    react_1.default.createElement(arco_1.Reset, null, "\u91CD\u7F6E"))))); })
            .open({
            initialValues: {
                aaa: '123',
            },
        })
            .then(function (values) {
            web_react_1.Modal.success({
                title: '提交成功',
                content: react_1.default.createElement("div", null,
                    "\u63D0\u4EA4\u6570\u636E:",
                    JSON.stringify(values)),
            });
        })
            .catch(function (values) {
            web_react_1.Modal.error({
                title: '提交失败',
                content: react_1.default.createElement("div", null,
                    "\u63D0\u4EA4\u6570\u636E:",
                    JSON.stringify(values)),
            });
        });
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_1.js.map