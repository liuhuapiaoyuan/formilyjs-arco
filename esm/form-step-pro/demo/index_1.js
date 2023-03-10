import React from 'react';
import { SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, null,
        React.createElement(SchemaField.Void, { name: "formStep", "x-component": "FormStepPro", "x-component-props": { onSubmit: console.log } },
            React.createElement(SchemaField.Void, { name: "step1", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第一步' } },
                React.createElement(SchemaField.String, { name: "aaa", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            React.createElement(SchemaField.Void, { name: "step2", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第二步' } },
                React.createElement(SchemaField.String, { name: "bbb", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            React.createElement(SchemaField.Void, { name: "step3", type: "void", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第三步' } },
                React.createElement(SchemaField.String, { name: "ccc", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            React.createElement(SchemaField.Void, { name: "previous", "x-component": "FormStepPro.Previous", "x-component-props": { text: '上一步' } }),
            React.createElement(SchemaField.Void, { name: "next", "x-component": "FormStepPro.Next", "x-component-props": { text: '下一步' } }),
            React.createElement(SchemaField.Void, { name: "submit", "x-component": "FormStepPro.Submit", "x-component-props": { text: '提交' } }))))); });
//# sourceMappingURL=index_1.js.map