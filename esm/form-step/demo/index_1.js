import React from 'react';
import { FormButtonGroup, FormStep, SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer } from '@formily/react';
import { Button } from '@arco-design/web-react';
var form = createForm();
var formStep = FormStep.createFormStep();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Void, { "x-component": "FormStep", "x-component-props": { formStep: formStep } },
            React.createElement(SchemaField.Void, { "x-component": "FormStep.StepPane", "x-component-props": { title: '第一步' } },
                React.createElement(SchemaField.String, { name: "aaa", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            React.createElement(SchemaField.Void, { "x-component": "FormStep.StepPane", "x-component-props": { title: '第二步' } },
                React.createElement(SchemaField.String, { name: "bbb", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            React.createElement(SchemaField.Void, { type: "void", "x-component": "FormStep.StepPane", "x-component-props": { title: '第三步' } },
                React.createElement(SchemaField.String, { name: "ccc", "x-decorator": "FormItem", required: true, "x-component": "Input" })))),
    React.createElement(FormConsumer, null, function () { return (React.createElement(FormButtonGroup, null,
        React.createElement(Button, { disabled: !formStep.allowBack, onClick: function () {
                formStep.back();
            } }, "\u4E0A\u4E00\u6B65"),
        React.createElement(Button, { disabled: !formStep.allowNext, onClick: function () {
                formStep.next();
            } }, "\u4E0B\u4E00\u6B65"),
        React.createElement(Button, { disabled: formStep.allowNext, onClick: function () {
                formStep.submit(console.log);
            } }, "\u63D0\u4EA4"))); }))); });
//# sourceMappingURL=index_1.js.map