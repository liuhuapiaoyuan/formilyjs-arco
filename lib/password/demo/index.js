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
        Password: arco_1.Password,
        FormItem: arco_1.FormItem,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
        react_1.default.createElement(SchemaField, null,
            react_1.default.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Password", required: true, "x-component-props": {
                    checkStrength: true,
                } })),
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index.js.map