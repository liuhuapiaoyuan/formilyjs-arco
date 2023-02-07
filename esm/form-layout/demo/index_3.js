import React from 'react';
import { Input, Select, FormItem, FormButtonGroup, Submit, FormLayout, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { layout: "inline" },
        React.createElement(Field, { name: "input", required: true, title: "\u8F93\u5165\u6846", decorator: [FormItem], component: [Input] }),
        React.createElement(Field, { name: "select", required: true, title: "\u9009\u62E9\u6846", decorator: [FormItem], component: [Select] }),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_3.js.map