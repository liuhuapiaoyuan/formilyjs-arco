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
        name: {
            type: 'void',
            title: '姓名',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                asterisk: true,
                feedbackLayout: 'none',
            },
            'x-component': 'Card',
            'x-component-props': {
                style: { marginBottom: '8px' },
            },
            properties: {
                firstName: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    required: true,
                },
                lastName: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    required: true,
                },
            },
        },
        texts: {
            type: 'void',
            title: '文本串联',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                asterisk: true,
                feedbackLayout: 'none',
            },
            'x-component': 'Card',
            'x-component-props': {
                style: { marginBottom: '8px' },
            },
            properties: {
                aa: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                        addonAfter: '单位',
                    },
                    'x-component': 'Input',
                    required: true,
                },
                bb: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                        addonAfter: '单位',
                    },
                    'x-component': 'Input',
                    required: true,
                },
                cc: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                        addonAfter: '单位',
                    },
                    'x-component': 'Input',
                    required: true,
                },
            },
        },
    },
};
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 16 },
        react_1.default.createElement(arco_1.SchemaRender, { schema: schema }),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_2.js.map