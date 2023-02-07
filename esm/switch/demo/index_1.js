import React from 'react';
import { FormButtonGroup, Submit, SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormConsumer, FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Number, { name: "switch", title: "\u5F00\u5173", "x-decorator": "FormItem", "x-component": "Switch" })),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")),
    React.createElement(FormConsumer, null, function () { return React.createElement("div", null, JSON.stringify(form.values)); }))); });
//# sourceMappingURL=index_1.js.map