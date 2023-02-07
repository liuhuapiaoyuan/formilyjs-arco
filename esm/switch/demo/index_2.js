import React from 'react';
import { FormButtonGroup, Submit, SchemaRender } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
var schema = {
    type: 'object',
    properties: {
        switch: {
            type: 'number',
            title: '开关',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaRender, { schema: schema }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map