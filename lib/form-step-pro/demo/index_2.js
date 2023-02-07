"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var form = (0, core_1.createForm)();
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
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, { schema: schema }))); });
//# sourceMappingURL=index_2.js.map