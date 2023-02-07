import React from 'react';
import { Input, Select, FormItem, FormLayout, ArrayItems } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Input: Input,
        Select: Select,
        FormItem: FormItem,
        FormLayout: FormLayout,
        ArrayItems: ArrayItems,
    },
});
var schema = {
    type: 'object',
    properties: {
        layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
                labelCol: 6,
                wrapperCol: 10,
                layout: 'vertical',
            },
            properties: {
                input: {
                    type: 'string',
                    title: '输入框',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                        fullness: true,
                    },
                },
                select: {
                    type: 'string',
                    title: '选择框',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                },
            },
        },
    },
};
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, { schema: schema }))); });
//# sourceMappingURL=index_2.js.map