"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 16 },
        react_1.default.createElement(react_2.VoidField, { name: "name", title: "\u59D3\u540D", decorator: [
                arco_1.FormItem,
                {
                    asterisk: true,
                    feedbackLayout: 'none',
                },
            ], component: [arco_1.Space] },
            react_1.default.createElement(react_2.Field, { name: "firstName", decorator: [arco_1.FormItem], component: [arco_1.Input], required: true }),
            react_1.default.createElement(react_2.Field, { name: "lastName", decorator: [arco_1.FormItem], component: [arco_1.Input], required: true })),
        react_1.default.createElement(react_2.VoidField, { name: "texts", title: "\u6587\u672C\u4E32\u8054", decorator: [
                arco_1.FormItem,
                {
                    asterisk: true,
                    feedbackLayout: 'none',
                },
            ], component: [arco_1.Space] },
            react_1.default.createElement(react_2.Field, { name: "aa", decorator: [
                    arco_1.FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [arco_1.Input], required: true }),
            react_1.default.createElement(react_2.Field, { name: "bb", decorator: [
                    arco_1.FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [arco_1.Input], required: true }),
            react_1.default.createElement(react_2.Field, { name: "cc", decorator: [
                    arco_1.FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [arco_1.Input], required: true })),
        react_1.default.createElement(react_2.Field, { name: "textarea", title: "\u6587\u672C\u6846", decorator: [arco_1.FormItem], component: [
                arco_1.Input.TextArea,
                {
                    style: {
                        width: 400,
                    },
                },
            ], required: true }),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_3.js.map