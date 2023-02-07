import React from 'react';
import { Password, FormItem, FormLayout, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Password: Password,
        FormItem: FormItem,
    },
});
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Password", required: true, "x-component-props": {
                    checkStrength: true,
                } })),
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index.js.map