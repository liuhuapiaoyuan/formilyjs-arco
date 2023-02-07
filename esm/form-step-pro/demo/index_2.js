import React from 'react';
import { SchemaField } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
var form = createForm();
var schema = {
    type: 'object',
    properties: {
        step: {
            type: 'void',
            'x-component': 'FormStepPro',
            'x-component-props': {
                onSubmit: '{{console.log}}',
            },
            properties: {
                previous: {
                    type: 'void',
                    'x-component': 'FormStepPro.Previous',
                    'x-component-props': { text: '上一步' },
                },
                next: {
                    type: 'void',
                    'x-component': 'FormStepPro.Next',
                    'x-component-props': { text: '下一步' },
                },
                nextWithSubmit: {
                    type: 'void',
                    'x-component': 'FormStepPro.NextWithSubmit',
                    'x-component-props': {
                        text: '提交&下一步',
                        onSubmit: function (values, index) {
                            console.log('==========', values, index);
                        },
                    },
                },
                submit: {
                    type: 'void',
                    'x-component': 'FormStepPro.Submit',
                    'x-component-props': { text: '提交' },
                },
                step1: {
                    type: 'void',
                    'x-component': 'FormStepPro.StepPane',
                    'x-component-props': {
                        title: '第一步',
                    },
                    properties: {
                        aaa: {
                            type: 'string',
                            title: 'AAA',
                            required: true,
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                        },
                        nextWithSubmit: {
                            type: 'void',
                            'x-component': 'FormStepPro.NextWithSubmit',
                            'x-component-props': {
                                style: {
                                    marginRight: 12,
                                },
                                text: '提交&下一步(第一步 only)',
                                onSubmit: function (values, index) {
                                    console.log('第一步 only', values, index);
                                },
                            },
                        },
                    },
                },
                step2: {
                    type: 'void',
                    'x-component': 'FormStepPro.StepPane',
                    'x-component-props': {
                        title: '第二步',
                    },
                    properties: {
                        bbb: {
                            type: 'string',
                            title: 'AAA',
                            required: true,
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                        },
                    },
                },
                step3: {
                    type: 'void',
                    'x-component': 'FormStepPro.StepPane',
                    'x-component-props': {
                        title: '第三步',
                    },
                    properties: {
                        ccc: {
                            type: 'string',
                            title: 'AAA',
                            required: true,
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                        },
                    },
                },
            },
        },
    },
};
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, { schema: schema }))); });
//# sourceMappingURL=index_2.js.map