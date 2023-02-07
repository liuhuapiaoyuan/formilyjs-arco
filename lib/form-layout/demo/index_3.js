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
    react_1.default.createElement(arco_1.FormLayout, { layout: "inline" },
        react_1.default.createElement(react_2.Field, { name: "input", required: true, title: "\u8F93\u5165\u6846", decorator: [arco_1.FormItem], component: [arco_1.Input] }),
        react_1.default.createElement(react_2.Field, { name: "select", required: true, title: "\u9009\u62E9\u6846", decorator: [arco_1.FormItem], component: [arco_1.Select] }),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_3.js.map