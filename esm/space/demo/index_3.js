import React from 'react';
import { Input, FormItem, FormLayout, FormButtonGroup, Submit, Space, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, Field, VoidField } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 16 },
        React.createElement(VoidField, { name: "name", title: "\u59D3\u540D", decorator: [
                FormItem,
                {
                    asterisk: true,
                    feedbackLayout: 'none',
                },
            ], component: [Space] },
            React.createElement(Field, { name: "firstName", decorator: [FormItem], component: [Input], required: true }),
            React.createElement(Field, { name: "lastName", decorator: [FormItem], component: [Input], required: true })),
        React.createElement(VoidField, { name: "texts", title: "\u6587\u672C\u4E32\u8054", decorator: [
                FormItem,
                {
                    asterisk: true,
                    feedbackLayout: 'none',
                },
            ], component: [Space] },
            React.createElement(Field, { name: "aa", decorator: [
                    FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [Input], required: true }),
            React.createElement(Field, { name: "bb", decorator: [
                    FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [Input], required: true }),
            React.createElement(Field, { name: "cc", decorator: [
                    FormItem,
                    {
                        addonAfter: '单位',
                    },
                ], component: [Input], required: true })),
        React.createElement(Field, { name: "textarea", title: "\u6587\u672C\u6846", decorator: [FormItem], component: [
                Input.TextArea,
                {
                    style: {
                        width: 400,
                    },
                },
            ], required: true }),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_3.js.map