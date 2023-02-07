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
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(SchemaField, null,
        react_1.default.createElement(SchemaField.Void, { "x-component": "FormLayout", "x-component-props": {
                labelCol: 6,
                wrapperCol: 10,
                size: 'small',
            } },
            react_1.default.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {}, required: true }),
            react_1.default.createElement(SchemaField.String, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "Select", required: true }))))); });
//# sourceMappingURL=index_1.js.map