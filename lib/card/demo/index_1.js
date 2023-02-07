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
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 16 },
        react_1.default.createElement(arco_1.SchemaField, null,
            react_1.default.createElement(arco_1.SchemaField.Void, { title: "\u59D3\u540D", "x-decorator": "FormItem", "x-decorator-props": {
                    asterisk: true,
                    feedbackLayout: 'none',
                }, "x-component": "Card", "x-component-props": { style: { marginBottom: '8px' } } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "firstName", title: "ces", "x-decorator": "FormItem", "x-component": "Input", required: true }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "lastName", "x-decorator": "FormItem", "x-component": "Input", required: true })),
            react_1.default.createElement(arco_1.SchemaField.Void, { title: "\u6587\u672C\u4E32\u8054", "x-decorator": "FormItem", "x-decorator-props": {
                    asterisk: true,
                    feedbackLayout: 'none',
                }, "x-component": "Card", "x-component-props": { style: { marginBottom: '8px' } } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "aa", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "bb", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }),
                react_1.default.createElement(arco_1.SchemaField.String, { name: "cc", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        addonAfter: '单位',
                    }, required: true }))),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_1.js.map