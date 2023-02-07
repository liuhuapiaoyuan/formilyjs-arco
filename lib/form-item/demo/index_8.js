"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var Div = function (props) { return react_1.default.createElement("div", null, props.children); };
var form = (0, core_1.createForm)({
    values: {
        size: 'default',
    },
    effects: function () {
        (0, core_1.onFieldChange)('size', ['value'], function (field, form) {
            form.setFieldState('sizeWrap.*', function (state) {
                if (state.decorator[1]) {
                    state.decorator[1].size = field.value;
                }
            });
        });
    },
});
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, { components: { Div: Div } },
        react_1.default.createElement(arco_1.SchemaField.String, { name: "size", title: "Radio.Group", "x-decorator": "FormItem", "x-component": "Radio.Group", enum: [
                { value: 'small', label: 'Small' },
                { value: 'default', label: 'Default' },
                { value: 'large', label: 'Large' },
            ] }),
        react_1.default.createElement(arco_1.SchemaField.Void, { name: "sizeWrap", "x-component": "Div" },
            react_1.default.createElement(arco_1.SchemaField.String, { name: "input", title: "Input", "x-decorator": "FormItem", "x-component": "Input", required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "select1", title: "Multiple Select", "x-decorator": "FormItem", "x-component": "Select", enum: [
                    {
                        label: '选项1',
                        value: 1,
                    },
                    {
                        label: '选项2',
                        value: 2,
                    },
                ], "x-component-props": {
                    mode: 'multiple',
                    placeholder: '请选择',
                }, required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "select2", title: "Select", "x-decorator": "FormItem", "x-component": "Select", enum: [
                    {
                        label: '选项1',
                        value: 1,
                    },
                    {
                        label: '选项2',
                        value: 2,
                    },
                ], "x-component-props": {
                    placeholder: '请选择',
                }, required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "Cascader", title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "DatePicker", title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "InputNumber", title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "TreeSelect", title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", required: true }),
            react_1.default.createElement(arco_1.SchemaField.String, { name: "Switch", title: "Switch", "x-decorator": "FormItem", "x-component": "Switch", required: true }))))); });
//# sourceMappingURL=index_8.js.map