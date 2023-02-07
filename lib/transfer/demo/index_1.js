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
        react_1.default.createElement(arco_1.SchemaField.Array, { name: "transfer", title: "\u7A7F\u68AD\u6846", "x-decorator": "FormItem", "x-component": "Transfer", enum: [
                { label: '选项1', key: 1, value: 1 },
                { label: '选项2', key: 2, value: 2 },
            ], "x-component-props": {
                render: function (item) { return item.label; },
            } })),
    react_1.default.createElement(react_2.FormConsumer, null, function () { return react_1.default.createElement("div", null, JSON.stringify(form.values)); }),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map