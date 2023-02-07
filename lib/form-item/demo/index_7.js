"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var icon_1 = require("@arco-design/web-react/icon");
var Title = function (props) { return react_1.default.createElement("h3", null, props.text); };
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, { components: { Title: Title } },
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u9519\u8BEF\u72B6\u6001(feedbackStatus=error)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'error',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u8B66\u544A\u72B6\u6001(feedbackStatus=warning)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'warning',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u6210\u529F\u72B6\u6001(feedbackStatus=success)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'success',
                feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u52A0\u8F7D\u72B6\u6001(feedbackStatus=pending)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'pending',
                feedbackIcon: react_1.default.createElement(icon_1.IconLoading, { style: { color: '#1890ff' } }),
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '反馈信息的布局' } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0Frequired", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-decorator-props": {
                feedbackLayout: 'terse',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0F\u6709feedback(feedbackLayout=terse)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'terse',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0F\u65E0feedback(feedbackLayout=terse)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackLayout: 'terse',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u677E\u6563\u6A21\u5F0F(feedbackLayout=loose)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'loose',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'warning',
                feedbackText: 'warning message',
                feedbackLayout: 'popover',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'popover',
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'success',
                feedbackText: 'success message',
                feedbackLayout: 'popover',
            } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '组件的适配情况' } }),
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "FormLayout", "x-component-props": { layout: 'vertical' } },
            react_1.default.createElement(arco_1.SchemaField.String, { title: "Select", "x-decorator": "FormItem", "x-component": "Select", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { title: "DatePicker.TimePicker", "x-decorator": "FormItem", "x-component": "TimePicker", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }),
            react_1.default.createElement(arco_1.SchemaField.String, { title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: react_1.default.createElement(icon_1.IconCheck, { style: { color: '#52c41a' } }),
                } }))))); });
//# sourceMappingURL=index_7.js.map