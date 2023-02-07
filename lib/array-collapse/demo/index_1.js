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
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
        ArrayCollapse: arco_1.ArrayCollapse,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(react_2.FormConsumer, null, function () { return react_1.default.createElement("div", null, JSON.stringify(form.values)); }),
        react_1.default.createElement(SchemaField, null,
            react_1.default.createElement(SchemaField.Array, { name: "string_array", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse", "x-component-props": {
                    accordion: true,
                    defaultOpenPanelCount: 3,
                } },
                react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '字符串数组',
                        name: 'array_0',
                    } },
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    react_1.default.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE" })),
            react_1.default.createElement(SchemaField.Array, { name: "array", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse" },
                react_1.default.createElement(SchemaField.Object, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '对象数组',
                        name: 'array_1',
                    } },
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    react_1.default.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE" })),
            react_1.default.createElement(SchemaField.Array, { name: "string_array_unshift", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse", "x-component-props": {
                    defaultOpenPanelCount: 8,
                } },
                react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '字符串数组',
                        name: 'array_2',
                    } },
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    react_1.default.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                react_1.default.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE\uFF08unshift\uFF09", "x-component-props": {
                        method: 'unshift',
                    } }))),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(web_react_1.Button, { onClick: function () {
                    form.setInitialValues({
                        array: Array.from({ length: 10 }).map(function () { return ({
                            input: 'default value',
                        }); }),
                        string_array: Array.from({ length: 10 }).map(function () { return 'default value'; }),
                        string_array_unshift: Array.from({ length: 10 }).map(function () { return 'default value'; }),
                    });
                } }, "\u52A0\u8F7D\u9ED8\u8BA4\u6570\u636E"),
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_1.js.map