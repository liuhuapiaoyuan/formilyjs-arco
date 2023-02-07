import React from 'react';
import { Input, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(Field, { name: "input", title: "\u8F93\u5165\u6846", required: true, decorator: [FormItem], component: [
            Input,
            {
                style: {
                    width: 240,
                },
            },
        ] }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_3.js.map