import React from 'react';
import { SchemaField } from '@formily/arco';
import { createForm, onFieldChange } from '@formily/core';
import { FormProvider } from '@formily/react';
var Div = function (props) { return React.createElement("div", null, props.children); };
var form = createForm({
    values: {
        size: 'default',
    },
    effects: function () {
        onFieldChange('size', ['value'], function (field, form) {
            form.setFieldState('sizeWrap.*', function (state) {
                if (state.decorator[1]) {
                    state.decorator[1].size = field.value;
                }
            });
        });
    },
});
export default (function () { return (React.createElement(FormProvider, { form: form },
    React.createElement(SchemaField, { components: { Div: Div } },
        React.createElement(SchemaField.String, { name: "size", title: "Radio.Group", "x-decorator": "FormItem", "x-component": "Radio.Group", enum: [
                { value: 'small', label: 'Small' },
                { value: 'default', label: 'Default' },
                { value: 'large', label: 'Large' },
            ] }),
        React.createElement(SchemaField.Void, { name: "sizeWrap", "x-component": "Div" },
            React.createElement(SchemaField.String, { name: "input", title: "Input", "x-decorator": "FormItem", "x-component": "Input", required: true }),
            React.createElement(SchemaField.String, { name: "select1", title: "Multiple Select", "x-decorator": "FormItem", "x-component": "Select", enum: [
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
            React.createElement(SchemaField.String, { name: "select2", title: "Select", "x-decorator": "FormItem", "x-component": "Select", enum: [
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
            React.createElement(SchemaField.String, { name: "Cascader", title: "Cascader", "x-decorator": "FormItem", "x-component": "Cascader", required: true }),
            React.createElement(SchemaField.String, { name: "DatePicker", title: "DatePicker", "x-decorator": "FormItem", "x-component": "DatePicker", required: true }),
            React.createElement(SchemaField.String, { name: "InputNumber", title: "InputNumber", "x-decorator": "FormItem", "x-component": "InputNumber", required: true }),
            React.createElement(SchemaField.String, { name: "TreeSelect", title: "TreeSelect", "x-decorator": "FormItem", "x-component": "TreeSelect", required: true }),
            React.createElement(SchemaField.String, { name: "Switch", title: "Switch", "x-decorator": "FormItem", "x-component": "Switch", required: true }))))); });
//# sourceMappingURL=index_8.js.map