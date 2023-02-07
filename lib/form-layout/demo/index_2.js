"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        Input: arco_1.Input,
        Select: arco_1.Select,
        FormItem: arco_1.FormItem,
        FormLayout: arco_1.FormLayout,
        ArrayItems: arco_1.ArrayItems,
    },
});
var schema = {
    type: 'object',
    properties: {
        layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
                labelCol: 6,
                wrapperCol: 10,
                layout: 'vertical',
            },
            properties: {
                input: {
                    type: 'string',
                    title: '输入框',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                        fullness: true,
                    },
                },
                select: {
                    type: 'string',
                    title: '选择框',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                },
            },
        },
    },
};
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(SchemaField, { schema: schema }))); });
//# sourceMappingURL=index_2.js.map