import React, { useRef } from 'react';
import { Input, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        Input: Input,
        FormItem: FormItem,
    },
});
export default (function () {
    var form = useRef(createForm({
        initialValues: {
            input: '吃是',
        },
    })).current;
    return (React.createElement(FormProvider, { form: form },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", description: "\u5BBD\u5EA6240px", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-component-props": {
                    style: {
                        width: 240,
                    },
                } }),
            React.createElement(SchemaField.String, { name: "textarea", title: "\u6587\u672C\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input.TextArea", "x-component-props": {
                    style: {
                        width: 400,
                    },
                } })),
        React.createElement(FormConsumer, null, function () { return (React.createElement("code", null,
            React.createElement("pre", null, JSON.stringify(form.values, null, 2)))); }),
        React.createElement(FormButtonGroup, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_1.js.map