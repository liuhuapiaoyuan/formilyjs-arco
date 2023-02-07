"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var Title = function (props) { return react_1.default.createElement("h3", null, props.text); };
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, { components: { Title: Title } },
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: 'label为空时的展示' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '冒号' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u9ED8\u8BA4", "x-decorator": "FormItem", "x-component": "Input" }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u6709\u5192\u53F7(colon=true)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                colon: true,
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '固定宽度设置' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u56FA\u5B9Alabel\u5BBD\u5EA6(labelWidth)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u56FA\u5B9Alabel\u5BBD\u5EA6(labelWidth)\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA\u6EA2\u51FA", description: "\u63CF\u8FF0\u63CF\u8FF0", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                tooltip: '提示提示',
                tooltipLayout: 'text',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u56FA\u5B9Alabel\u5BBD\u5EA6(labelWidth)\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C", description: "\u63CF\u8FF0\u63CF\u8FF0", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                labelWrap: true,
                tooltip: '提示提示',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u56FA\u5B9A\u5185\u5BB9\u5BBD\u5EA6(wraperWidth)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                wrapperWidth: 300,
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '对齐方式设置' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "label\u5DE6\u5BF9\u9F50(labelAlign=left)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                labelAlign: 'left',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "label\u53F3\u5BF9\u9F50(labelAlign=right\u9ED8\u8BA4)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                labelAlign: 'right',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5185\u5BB9\u5DE6\u5BF9\u9F50(wrapperAlign=left\u9ED8\u8BA4)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                wrapperWidth: 240,
                wrapperAlign: 'left',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5185\u5BB9\u53F3\u5BF9\u9F50(wrapperAlign=right)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                labelWidth: 300,
                wrapperWidth: 240,
                wrapperAlign: 'right',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "tooltip", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                tooltip: 'tooltip',
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '是否撑满' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u9ED8\u8BA4\u4E0D\u6491\u6EE1(fullness=false)", "x-decorator": "FormItem", "x-component": "Select" }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u6491\u6EE1(fullness=true)", "x-decorator": "FormItem", "x-component": "Select", "x-decorator-props": {
                fullness: true,
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '辅助信息' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5FC5\u586B\u661F\u53F7", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                asterisk: true,
                labelCol: 6,
                wrapperCol: 10,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u524D\u7F00", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                addonBefore: 'addonBefore',
                labelCol: 6,
                wrapperCol: 10,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u540E\u7F00", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                addonAfter: 'addonAfter',
                labelCol: 6,
                wrapperCol: 10,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5E2E\u52A9\u4FE1\u606FfeedbackText", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackText: 'feedbackText',
                labelCol: 6,
                wrapperCol: 10,
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u989D\u5916\u4FE1\u606Fextra", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackText: 'feedbackText',
                extra: 'extra',
                labelCol: 6,
                wrapperCol: 10,
            } })))); });
//# sourceMappingURL=index_4.js.map