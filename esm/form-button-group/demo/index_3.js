import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormLayout, Reset, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" }),
            React.createElement(SchemaField.String, { title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
        React.createElement(FormButtonGroup.Sticky, { align: "center" },
            React.createElement(FormButtonGroup, null,
                React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"),
                React.createElement(Reset, null, "\u91CD\u7F6E")))))); });
//# sourceMappingURL=index_3.js.map