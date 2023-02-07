import React from 'react';
import { FormButtonGroup, Submit, SchemaField, FormLayout, FormCollapse, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
import { Button } from '@arco-design/web-react';
var form = createForm();
var formCollapse = FormCollapse.createFormCollapse();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.Void, { title: "\u6298\u53E0\u9762\u677F", "x-decorator": "FormItem", "x-component": "FormCollapse", "x-component-props": {
                    formCollapse: formCollapse,
                } },
                React.createElement(SchemaField.Void, { name: "panel1", "x-component": "FormCollapse.CollapsePanel", "x-component-props": { header: 'A1', name: '1' } },
                    React.createElement(SchemaField.String, { name: "aaa", title: "AAA", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
                React.createElement(SchemaField.Void, { name: "panel2", "x-component": "FormCollapse.CollapsePanel", "x-component-props": { header: 'A2', name: '2' } },
                    React.createElement(SchemaField.String, { name: "bbb", title: "BBB", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
                React.createElement(SchemaField.Void, { name: "panel3", "x-component": "FormCollapse.CollapsePanel", "x-component-props": { header: 'A3', name: '3' } },
                    React.createElement(SchemaField.String, { name: "ccc", title: "CCC", "x-decorator": "FormItem", required: true, "x-component": "Input" })))),
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
//# sourceMappingURL=index_1.js.map