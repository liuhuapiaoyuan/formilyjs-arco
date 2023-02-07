import React from 'react';
import { FormButtonGroup, Submit, SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormConsumer, FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Array, { name: "transfer", title: "\u7A7F\u68AD\u6846", "x-decorator": "FormItem", "x-component": "Transfer", enum: [
                { label: '选项1', key: 1, value: 1 },
                { label: '选项2', key: 2, value: 2 },
            ], "x-component-props": {
                render: function (item) { return item.label; },
            } })),
    React.createElement(FormConsumer, null, function () { return React.createElement("div", null, JSON.stringify(form.values)); }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map