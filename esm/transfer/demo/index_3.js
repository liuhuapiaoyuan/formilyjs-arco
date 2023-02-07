import React from 'react';
import { Transfer, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(Field, { name: "transfer", title: "\u7A7F\u68AD\u6846", dataSource: [
            { title: '选项1', key: 1 },
            { title: '选项2', key: 2 },
        ], decorator: [FormItem], component: [
            Transfer,
            {
                render: function (item) { return item.title; },
            },
        ] }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_3.js.map