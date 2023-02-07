import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormLayout } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 16 },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { title: "\u59D3\u540D", "x-decorator": "FormItem", "x-component": "Input", "x-component-props": { style: { marginBottom: '8px' } } }),
            React.createElement(SchemaField.Void, { "x-component": "Button", "x-component-props": {
                    style: { marginBottom: '8px' },
                    onClick: function () {
                        console.log('onclick');
                    },
                }, "x-content": "Button" })),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_1.js.map