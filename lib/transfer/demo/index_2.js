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
var schema = {
    type: 'object',
    properties: {
        transfer: {
            type: 'array',
            title: '穿梭框',
            'x-decorator': 'FormItem',
            'x-component': 'Transfer',
            enum: [
                { title: '选项1', key: 1 },
                { title: '选项2', key: 2 },
            ],
            'x-component-props': {
                render: '{{renderTitle}}',
            },
        },
    },
};
var renderTitle = function (item) { return item.title; };
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaRender, { schema: schema, scope: { renderTitle: renderTitle } }),
    react_1.default.createElement(react_2.FormConsumer, null, function () { return react_1.default.createElement("div", null, JSON.stringify(form.values)); }),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map