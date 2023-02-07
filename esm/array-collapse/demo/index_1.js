import React from 'react';
import { FormItem, Input, ArrayCollapse, FormButtonGroup, Submit, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react';
import { Button } from '@arco-design/web-react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        Input: Input,
        ArrayCollapse: ArrayCollapse,
    },
});
var form = createForm();
export default (function () {
    return (React.createElement(FormProvider, { form: form },
        React.createElement(FormConsumer, null, function () { return React.createElement("div", null, JSON.stringify(form.values)); }),
        React.createElement(SchemaField, null,
            React.createElement(SchemaField.Array, { name: "string_array", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse", "x-component-props": {
                    accordion: true,
                    defaultOpenPanelCount: 3,
                } },
                React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '字符串数组',
                        name: 'array_0',
                    } },
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    React.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE" })),
            React.createElement(SchemaField.Array, { name: "array", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse" },
                React.createElement(SchemaField.Object, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '对象数组',
                        name: 'array_1',
                    } },
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    React.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE" })),
            React.createElement(SchemaField.Array, { name: "string_array_unshift", maxItems: 3, "x-decorator": "FormItem", "x-component": "ArrayCollapse", "x-component-props": {
                    defaultOpenPanelCount: 8,
                } },
                React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.CollapsePanel", "x-component-props": {
                        header: '字符串数组',
                        name: 'array_2',
                    } },
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Index" }),
                    React.createElement(SchemaField.String, { name: "input", "x-decorator": "FormItem", title: "Input", required: true, "x-component": "Input" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Remove" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveUp" }),
                    React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.MoveDown" })),
                React.createElement(SchemaField.Void, { "x-component": "ArrayCollapse.Addition", title: "\u6DFB\u52A0\u6761\u76EE\uFF08unshift\uFF09", "x-component-props": {
                        method: 'unshift',
                    } }))),
        React.createElement(FormButtonGroup, null,
            React.createElement(Button, { onClick: function () {
                    form.setInitialValues({
                        array: Array.from({ length: 10 }).map(function () { return ({
                            input: 'default value',
                        }); }),
                        string_array: Array.from({ length: 10 }).map(function () { return 'default value'; }),
                        string_array_unshift: Array.from({ length: 10 }).map(function () { return 'default value'; }),
                    });
                } }, "\u52A0\u8F7D\u9ED8\u8BA4\u6570\u636E"),
            React.createElement(Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_1.js.map