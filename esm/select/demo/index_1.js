import React from 'react';
import { Select, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Select: Select,
        FormItem: FormItem,
    },
});
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Number, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "Select", enum: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
            ], "x-component-props": {
                style: {
                    width: 120,
                },
            } })),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map