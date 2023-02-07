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
    react_1.default.createElement(arco_1.SchemaField, null,
        react_1.default.createElement(arco_1.SchemaField.Void, { name: "formStep", "x-component": "FormStepPro", "x-component-props": { onSubmit: console.log } },
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "step1", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第一步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "aaa", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "step2", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第二步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "bbb", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "step3", type: "void", "x-component": "FormStepPro.StepPane", "x-component-props": { title: '第三步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "ccc", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "previous", "x-component": "FormStepPro.Previous", "x-component-props": { text: '上一步' } }),
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "next", "x-component": "FormStepPro.Next", "x-component-props": { text: '下一步' } }),
            react_1.default.createElement(arco_1.SchemaField.Void, { name: "submit", "x-component": "FormStepPro.Submit", "x-component-props": { text: '提交' } }))))); });
//# sourceMappingURL=index_1.js.map