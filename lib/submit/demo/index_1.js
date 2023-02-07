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
    react_1.default.createElement(arco_1.FormLayout, { layout: "vertical" },
        react_1.default.createElement(arco_1.SchemaField, null,
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input2", title: "\u8F93\u5165\u6846", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))),
    react_1.default.createElement(arco_1.FormLayout, null,
        react_1.default.createElement(arco_1.SchemaField, null,
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input3", title: "\u8F93\u5165\u6846", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input4", title: "\u8F93\u5165\u6846", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))),
    react_1.default.createElement(arco_1.FormLayout, null,
        react_1.default.createElement(arco_1.SchemaField, null,
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input5", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input6", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_1.js.map