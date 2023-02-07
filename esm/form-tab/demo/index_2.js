import React from 'react';
import { FormTab, FormItem, Input, FormButtonGroup, Submit, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react';
import { Button } from '@arco-design/web-react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        FormTab: FormTab,
        Input: Input,
    },
});
var form = createForm();
var formTab = FormTab.createFormTab('tab3');
var schema = {
    type: 'object',
    properties: {
        tabletest: {
            type: 'string',
            title: '其他的',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        collapse: {
            type: 'void',
            'x-component': 'FormTab',
            'x-component-props': {
                formTab: formTab,
            },
            properties: {
                tab1: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab1',
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
                tab2: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab2',
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
                tab3: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab3',
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
export default (function () {
    return (React.createElement(FormProvider, { form: form },
        React.createElement(SchemaField, { schema: schema }),
        React.createElement(FormConsumer, null, function () { return React.createElement("code", null, JSON.stringify(form.values)); }),
        React.createElement(FormButtonGroup.FormItem, null,
            React.createElement(Button, { onClick: function () {
                    form.query('tab3').take(function (field) {
                        field.visible = !field.visible;
                    });
                } }, "\u663E\u793A/\u9690\u85CF\u6700\u540E\u4E00\u4E2ATab"),
            React.createElement(Button, { onClick: function () {
                    formTab === null || formTab === void 0 ? void 0 : formTab.setActiveKey('tab2');
                } }, "\u5207\u6362\u7B2C\u4E8C\u4E2ATab"),
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_2.js.map