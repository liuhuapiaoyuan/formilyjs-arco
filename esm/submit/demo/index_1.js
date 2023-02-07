import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormLayout } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { layout: "vertical" },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            React.createElement(SchemaField.String, { name: "input2", title: "\u8F93\u5165\u6846", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        React.createElement(FormButtonGroup, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))),
    React.createElement(FormLayout, null,
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { name: "input3", title: "\u8F93\u5165\u6846", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            React.createElement(SchemaField.String, { name: "input4", title: "\u8F93\u5165\u6846", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        React.createElement(FormButtonGroup, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))),
    React.createElement(FormLayout, null,
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { name: "input5", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } }),
            React.createElement(SchemaField.String, { name: "input6", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {
                    placeholder: '请输入',
                } })),
        React.createElement(FormButtonGroup, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_1.js.map