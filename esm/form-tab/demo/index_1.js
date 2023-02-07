var _a;
import React from 'react';
import { FormTab, FormItem, Input, FormButtonGroup, Submit, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Button } from '@arco-design/web-react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        FormTab: FormTab,
        Input: Input,
    },
});
var form = createForm();
var formTab = (_a = FormTab.createFormTab) === null || _a === void 0 ? void 0 : _a.call(FormTab, 'tab1');
export default (function () {
    return (React.createElement(FormProvider, { form: form },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.Void, { "x-component": "FormTab", "x-component-props": { formTab: formTab } },
                React.createElement(SchemaField.Void, { name: "tab1", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A1' } },
                    React.createElement(SchemaField.String, { name: "aaa", "x-decorator": "FormItem", title: "AAA", required: true, "x-component": "Input" })),
                React.createElement(SchemaField.Void, { name: "tab2", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A2' } },
                    React.createElement(SchemaField.String, { name: "bbb", "x-decorator": "FormItem", title: "BBB", required: true, "x-component": "Input" })),
                React.createElement(SchemaField.Void, { name: "tab3", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A3' } },
                    React.createElement(SchemaField.String, { name: "ccc", "x-decorator": "FormItem", title: "CCC", required: true, "x-component": "Input" })))),
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
//# sourceMappingURL=index_1.js.map