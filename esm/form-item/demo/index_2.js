import React from 'react';
import { FormButtonGroup, Submit, SchemaRender } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
var schema = {
    type: 'object',
    properties: {
        input: {
            type: 'string',
            title: '输入框',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                style: {
                    width: 240,
                },
            },
        },
    },
};
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaRender, { schema: schema }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map