"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var react_2 = require("@formily/react");
var core_1 = require("@formily/core");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
        FormGrid: arco_1.FormGrid,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, null,
            react_1.default.createElement(SchemaField.Void, { "x-component": "FormGrid", "x-component-props": {
                    maxColumns: 3,
                    minColumns: 2,
                } },
                react_1.default.createElement(SchemaField.String, { name: "aaa", title: "aaa", "x-decorator": "FormItem", "x-decorator-props": { gridSpan: 2 }, "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "bbb", title: "bbb", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "ccc", title: "ccc", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "ddd", title: "ddd", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "eee", title: "eee", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "fff", title: "fff", "x-decorator": "FormItem", "x-component": "Input" }),
                react_1.default.createElement(SchemaField.String, { name: "ggg", title: "ggg", "x-decorator": "FormItem", "x-component": "Input" })))));
});
//# sourceMappingURL=index_1.js.map