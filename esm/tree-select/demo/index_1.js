import React from 'react';
import { FormButtonGroup, Submit, SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Number, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "TreeSelect", enum: [
                {
                    label: '亚洲',
                    value: 'Asia',
                    key: '0',
                    children: [
                        {
                            label: '中国',
                            value: 'China',
                            key: '0-0',
                            children: [
                                {
                                    label: '北京',
                                    value: 'Beijing',
                                    key: '0-0-0',
                                },
                                {
                                    label: '上海',
                                    value: 'Shanghai',
                                    key: '0-0-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '北美洲',
                    value: 'North America',
                    key: '1',
                },
            ], "x-component-props": {
                style: {
                    width: 200,
                },
            } })),
    React.createElement(FormButtonGroup, null,
        React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map