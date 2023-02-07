"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
exports.default = (function () { return (react_1.default.createElement(web_react_1.Button, { onClick: function () {
        (0, arco_1.FormDrawer)('弹窗表单', function (resolve) { return (react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
            react_1.default.createElement(react_2.Field, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", decorator: [arco_1.FormItem], component: [arco_1.Input] }),
            react_1.default.createElement(react_2.Field, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", decorator: [arco_1.FormItem], component: [arco_1.Input] }),
            react_1.default.createElement(react_2.Field, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", decorator: [arco_1.FormItem], component: [arco_1.Input] }),
            react_1.default.createElement(react_2.Field, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", decorator: [arco_1.FormItem], component: [arco_1.Input] }),
            react_1.default.createElement(arco_1.FormDrawer.Footer, null,
                react_1.default.createElement(arco_1.FormButtonGroup, { align: "right" },
                    react_1.default.createElement(arco_1.Submit, { onSubmit: function () {
                            return new Promise(function (resolve) {
                                setTimeout(resolve, 1000);
                            });
                        } }, "\u63D0\u4EA4"),
                    react_1.default.createElement(arco_1.Reset, null, "\u91CD\u7F6E"))))); })
            .open({
            initialValues: {
                aaa: '123',
            },
        })
            .then(console.log);
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_3.js.map