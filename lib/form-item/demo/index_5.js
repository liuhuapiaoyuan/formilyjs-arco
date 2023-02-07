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
    react_1.default.createElement(arco_1.SchemaField, null,
        react_1.default.createElement(arco_1.SchemaField.String, { name: "input", title: "Input", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "Select", title: "Select", "x-decorator": "FormItem", "x-component": "Select", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "Select", title: "Select", "x-decorator": "FormItem", "x-component": "Select", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "Cascader", title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "DatePicker", title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "InputNumber", title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "TreeSelect", title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "Switch", title: "Switch", "x-decorator": "FormItem", "x-component": "Switch", required: true, "x-decorator-props": {
                bordered: false,
            } })))); });
//# sourceMappingURL=index_5.js.map