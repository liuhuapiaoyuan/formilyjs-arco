import React from 'react';
import { SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
import { IconCheck, IconLoading } from '@arco-design/web-react/icon';
var Title = function (props) { return React.createElement("h3", null, props.text); };
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, { components: { Title: Title } },
        React.createElement(SchemaField.String, { title: "\u9519\u8BEF\u72B6\u6001(feedbackStatus=error)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'error',
            } }),
        React.createElement(SchemaField.String, { title: "\u8B66\u544A\u72B6\u6001(feedbackStatus=warning)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'warning',
            } }),
        React.createElement(SchemaField.String, { title: "\u6210\u529F\u72B6\u6001(feedbackStatus=success)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'success',
                feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
            } }),
        React.createElement(SchemaField.String, { title: "\u52A0\u8F7D\u72B6\u6001(feedbackStatus=pending)", "x-decorator": "FormItem", "x-component": "Input", description: "description", "x-decorator-props": {
                feedbackStatus: 'pending',
                feedbackIcon: React.createElement(IconLoading, { style: { color: '#1890ff' } }),
            } }),
        React.createElement(SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '反馈信息的布局' } }),
        React.createElement(SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0Frequired", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-decorator-props": {
                feedbackLayout: 'terse',
            } }),
        React.createElement(SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0F\u6709feedback(feedbackLayout=terse)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'terse',
            } }),
        React.createElement(SchemaField.String, { title: "\u7D27\u51D1\u6A21\u5F0F\u65E0feedback(feedbackLayout=terse)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackLayout: 'terse',
            } }),
        React.createElement(SchemaField.String, { title: "\u677E\u6563\u6A21\u5F0F(feedbackLayout=loose)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'loose',
            } }),
        React.createElement(SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'warning',
                feedbackText: 'warning message',
                feedbackLayout: 'popover',
            } }),
        React.createElement(SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'error',
                feedbackText: 'error message',
                feedbackLayout: 'popover',
            } }),
        React.createElement(SchemaField.String, { title: "\u5F39\u51FA\u6A21\u5F0F(feedbackLayout=popover)", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                feedbackStatus: 'success',
                feedbackText: 'success message',
                feedbackLayout: 'popover',
            } }),
        React.createElement(SchemaField.Void, { "x-component": "Title", "x-component-props": { text: '组件的适配情况' } }),
        React.createElement(SchemaField.Void, { "x-component": "FormLayout", "x-component-props": { layout: 'vertical' } },
            React.createElement(SchemaField.String, { title: "Select", "x-decorator": "FormItem", "x-component": "Select", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }),
            React.createElement(SchemaField.String, { title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }),
            React.createElement(SchemaField.String, { title: "DatePicker.TimePicker", "x-decorator": "FormItem", "x-component": "TimePicker", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }),
            React.createElement(SchemaField.String, { title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }),
            React.createElement(SchemaField.String, { title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }),
            React.createElement(SchemaField.String, { title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", "x-decorator-props": {
                    feedbackStatus: 'success',
                    feedbackIcon: React.createElement(IconCheck, { style: { color: '#52c41a' } }),
                } }))))); });
//# sourceMappingURL=index_7.js.map