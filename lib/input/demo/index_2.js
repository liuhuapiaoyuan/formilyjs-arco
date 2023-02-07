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
        FormItem: arco_1.FormItem,
    },
});
var form = (0, core_1.createForm)();
var schema = {
    type: 'object',
    properties: {
        input: {
            type: 'string',
            title: '输入框',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
                style: {
                    width: 240,
                },
            },
        },
        textarea: {
            type: 'string',
            title: '输入框',
            'x-decorator': 'FormItem',
            'x-component': 'Input.TextArea',
            'x-component-props': {
                style: {
                    width: 240,
                },
            },
        },
    },
};
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(SchemaField, { schema: schema }),
    react_1.default.createElement(react_2.FormConsumer, null, function () { return (react_1.default.createElement("code", null,
        react_1.default.createElement("pre", null, JSON.stringify(form.values, null, 2)))); }),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map