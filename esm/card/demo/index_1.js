import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormLayout } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 16 },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.Void, { title: "\u59D3\u540D", "x-decorator": "FormItem", "x-decorator-props": {
                    asterisk: true,
                    feedbackLayout: 'none',
                }, "x-component": "Card", "x-component-props": { style: { marginBottom: '8px' } } },
                React.createElement(SchemaField.String, { name: "firstName", title: "ces", "x-decorator": "FormItem", "x-component": "Input", required: true }),
                React.createElement(SchemaField.String, { name: "lastName", "x-decorator": "FormItem", "x-component": "Input", required: true })),
            React.createElement(SchemaField.Void, { title: "\u6587\u672C\u4E32\u8054", "x-decorator": "FormItem", "x-decorator-props": {
                    asterisk: true,
                    feedbackLayout: 'none',
                }, "x-component": "Card", "x-component-props": { style: { marginBottom: '8px' } } },
                React.createElement(SchemaField.String, { name: "aa", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }),
                React.createElement(SchemaField.String, { name: "bb", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }),
                React.createElement(SchemaField.String, { name: "cc", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }))),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_1.js.map