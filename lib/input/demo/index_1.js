"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        Input: arco_1.Input,
        FormItem: arco_1.FormItem,
    },
});
exports.default = (function () {
    var form = (0, react_1.useRef)((0, core_1.createForm)({
        initialValues: {
            input: '吃是',
        },
    })).current;
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, null,
            react_1.default.createElement(SchemaField.String, { name: "input", title: "\u8F93\u5165\u6846", description: "\u5BBD\u5EA6240px", "x-decorator": "FormItem", "x-component": "Input", required: true, "x-component-props": {
                    style: {
                        width: 240,
                    },
                } }),
            react_1.default.createElement(SchemaField.String, { name: "textarea", title: "\u6587\u672C\u6846", "x-decorator": "FormItem", required: true, "x-component": "Input.TextArea", "x-component-props": {
                    style: {
                        width: 400,
                    },
                } })),
        react_1.default.createElement(react_2.FormConsumer, null, function () { return (react_1.default.createElement("code", null,
            react_1.default.createElement("pre", null, JSON.stringify(form.values, null, 2)))); }),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_1.js.map