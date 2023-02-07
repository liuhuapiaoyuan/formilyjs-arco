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
        Select: arco_1.Select,
        FormItem: arco_1.FormItem,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(SchemaField, null,
        react_1.default.createElement(SchemaField.Number, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "Select", enum: [
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
            ], "x-component-props": {
                style: {
                    width: 120,
                },
            } })),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map