import React from 'react';
import { FormButtonGroup, Submit, SchemaRender, FormLayout, FormCollapse, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
import { Button } from '@arco-design/web-react';
var form = createForm();
var formCollapse = FormCollapse.createFormCollapse();
var schema = {
    type: 'object',
    properties: {
        collapse: {
            type: 'void',
            title: '折叠面板',
            'x-decorator': 'FormItem',
            'x-component': 'FormCollapse',
            'x-component-props': {
                defaultActiveKey: '1',
                formCollapse: formCollapse,
            },
            properties: {
                panel1: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A1',
                        name: '1',
                    },
                    properties: {
                        aaa: {
                            type: 'string',
                            title: 'AAA',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
                panel2: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A2',
                        name: '2',
                    },
                    properties: {
                        bbb: {
                            type: 'string',
                            title: 'BBB',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
                panel3: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A3',
                        name: '3',
                    },
                    properties: {
                        ccc: {
                            type: 'string',
                            title: 'CCC',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
            },
        },
    },
};
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
        React.createElement(SchemaRender, { schema: schema }),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Button, { onClick: function () {
                    form.query('panel3').take(function (field) {
                        field.visible = !field.visible;
                    });
                } }, "\u663E\u793A/\u9690\u85CF\u6700\u540E\u4E00\u4E2ATab"),
            React.createElement(Button, { onClick: function () {
                    formCollapse.toggleActiveKey('2');
                } }, "\u5207\u6362\u7B2C\u4E8C\u4E2ATab"),
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_2.js.map