import React from 'react';
import { SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.String, { name: "input", title: "Input", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "Select", title: "Select", "x-decorator": "FormItem", "x-component": "Select", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "Select", title: "Select", "x-decorator": "FormItem", "x-component": "Select", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "Cascader", title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "DatePicker", title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "InputNumber", title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "TreeSelect", title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", required: true, "x-decorator-props": {
                bordered: false,
            } }),
        React.createElement(SchemaField.String, { name: "Switch", title: "Switch", "x-decorator": "FormItem", "x-component": "Switch", required: true, "x-decorator-props": {
                bordered: false,
            } })))); });
//# sourceMappingURL=index_5.js.map