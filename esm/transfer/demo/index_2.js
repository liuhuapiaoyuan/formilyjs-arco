import React from 'react';
import { FormButtonGroup, Submit, SchemaRender } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormConsumer, FormProvider } from '@formily/react';
var form = createForm();
var schema = {
    type: 'object',
    properties: {
        transfer: {
            type: 'array',
            title: '穿梭框',
            'x-decorator': 'FormItem',
            'x-component': 'Transfer',
            enum: [
                { title: '选项1', key: 1 },
                { title: '选项2', key: 2 },
            ],
            'x-component-props': {
                render: '{{renderTitle}}',
            },
        },
    },
};
var renderTitle = function (item) { return item.title; };
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaRender, { schema: schema, scope: { renderTitle: renderTitle } }),
    React.createElement(FormConsumer, null, function () { return React.createElement("div", null, JSON.stringify(form.values)); }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map