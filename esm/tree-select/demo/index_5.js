import React from 'react';
import { TreeSelect, FormItem, FormButtonGroup, Submit } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, Field } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(Field, { name: "select", title: "\u9009\u62E9\u6846", dataSource: [
            {
                label: '选项1',
                value: 1,
                key: '0',
                children: [
                    {
                        label: 'Child Node1',
                        value: '0-0-0',
                        key: '0-0-0',
                    },
                    {
                        label: 'Child Node2',
                        value: '0-0-1',
                        key: '0-0-1',
                    },
                    {
                        label: 'Child Node3',
                        value: '0-0-2',
                        key: '0-0-2',
                    },
                ],
            },
            {
                label: '选项2',
                value: 2,
                key: '1',
                children: [
                    {
                        label: 'Child Node3',
                        value: '0-1-0',
                        key: '0-1-0',
                    },
                    {
                        label: 'Child Node4',
                        value: '0-1-1',
                        key: '0-1-1',
                    },
                    {
                        label: 'Child Node5',
                        value: '0-1-2',
                        key: '0-1-2',
                    },
                ],
            },
        ], decorator: [FormItem], component: [TreeSelect] }),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_5.js.map