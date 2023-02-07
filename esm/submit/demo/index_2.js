import React from 'react';
import { FormButtonGroup, Submit, SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", required: true, "x-decorator": "FormItem", "x-component": "Input" }),
        React.createElement(SchemaField.String, { name: "input2", title: "\u8F93\u5165\u6846", default: "123", required: true, "x-decorator": "FormItem", "x-component": "Input" })),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: function (values) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log(values);
                        resolve(true);
                    }, 2000);
                });
            } }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map