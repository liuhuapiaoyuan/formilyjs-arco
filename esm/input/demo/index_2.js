import React from 'react';
import { Input, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Input: Input,
        FormItem: FormItem,
    },
});
var form = createForm();
var schema = {
    type: 'object',
    properties: {
        input: {
            type: 'string',
            title: '输入框',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                style: {
                    width: 240,
                },
            },
        },
        textarea: {
            type: 'string',
            title: '输入框',
            'x-decorator': 'FormItem',
            'x-component': 'Input.TextArea',
            'x-component-props': {
                style: {
                    width: 240,
                },
            },
        },
    },
};
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, { schema: schema }),
    React.createElement(FormConsumer, null, function () { return (React.createElement("code", null,
        React.createElement("pre", null, JSON.stringify(form.values, null, 2)))); }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map