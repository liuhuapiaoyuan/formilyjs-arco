"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var form = (0, core_1.createForm)();
var formStep = arco_1.FormStep.createFormStep();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, null,
        react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "FormStep", "x-component-props": { formStep: formStep } },
            react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "FormStep.StepPane", "x-component-props": { title: '第一步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "aaa", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            react_1.default.createElement(arco_1.SchemaField.Void, { "x-component": "FormStep.StepPane", "x-component-props": { title: '第二步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "bbb", "x-decorator": "FormItem", required: true, "x-component": "Input" })),
            react_1.default.createElement(arco_1.SchemaField.Void, { type: "void", "x-component": "FormStep.StepPane", "x-component-props": { title: '第三步' } },
                react_1.default.createElement(arco_1.SchemaField.String, { name: "ccc", "x-decorator": "FormItem", required: true, "x-component": "Input" })))),
    react_1.default.createElement(react_2.FormConsumer, null, function () { return (react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(web_react_1.Button, { disabled: !formStep.allowBack, onClick: function () {
                formStep.back();
            } }, "\u4E0A\u4E00\u6B65"),
        react_1.default.createElement(web_react_1.Button, { disabled: !formStep.allowNext, onClick: function () {
                formStep.next();
            } }, "\u4E0B\u4E00\u6B65"),
        react_1.default.createElement(web_react_1.Button, { disabled: formStep.allowNext, onClick: function () {
                formStep.submit(console.log);
            } }, "\u63D0\u4EA4"))); }))); });
//# sourceMappingURL=index_2.js.map