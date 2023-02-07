import React from 'react';
import { FormItem, Input, FormGrid } from '@formily/arco';
import { FormProvider, createSchemaField } from '@formily/react';
import { createForm } from '@formily/core';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        Input: Input,
        FormGrid: FormGrid,
    },
});
var form = createForm();
export default (function () {
    return (React.createElement(FormProvider, { form: form },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.Void, { "x-component": "FormGrid", "x-component-props": {
                    maxColumns: 3,
                    minColumns: 2,
                } },
                React.createElement(SchemaField.String, { name: "aaa", title: "aaa", "x-decorator": "FormItem", "x-decorator-props": { gridSpan: 2 }, "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "bbb", title: "bbb", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "ccc", title: "ccc", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "ddd", title: "ddd", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "eee", title: "eee", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "fff", title: "fff", "x-decorator": "FormItem", "x-component": "Input" }),
                React.createElement(SchemaField.String, { name: "ggg", title: "ggg", "x-decorator": "FormItem", "x-component": "Input" })))));
});
//# sourceMappingURL=index_1.js.map