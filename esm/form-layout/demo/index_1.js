import React from 'react';
import { Input, Select, FormItem, FormLayout } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Input: Input,
        Select: Select,
        FormItem: FormItem,
        FormLayout: FormLayout,
    },
});
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Void, { "x-component": "FormLayout", "x-component-props": {
                labelCol: 6,
                wrapperCol: 10,
                size: 'small',
            } },
            React.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {}, required: true }),
            React.createElement(SchemaField.String, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "Select", required: true }))))); });
//# sourceMappingURL=index_1.js.map