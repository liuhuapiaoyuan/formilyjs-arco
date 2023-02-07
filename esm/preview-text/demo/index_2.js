import React from 'react';
import { PreviewText, FormItem, FormLayout, FormButtonGroup, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, mapReadPretty, connect, createSchemaField, } from '@formily/react';
import { Button, Input as ArcoInput } from '@arco-design/web-react';
var Input = connect(ArcoInput, mapReadPretty(PreviewText.Input));
var SchemaField = createSchemaField({
    components: {
        Input: Input,
        FormItem: FormItem,
        PreviewText: PreviewText,
    },
});
var form = createForm();
export default (function () {
    return (React.createElement(PreviewText.Placeholder, { value: "\u6682\u65E0\u6570\u636E" },
        React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
            React.createElement(FormProvider, { form: form },
                React.createElement(SchemaField, null,
                    React.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u6587\u672C\u9884\u89C8", required: true, "x-component": "Input", default: 'Hello world' }),
                    React.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u9009\u62E9\u9879\u9884\u89C8", "x-component": "PreviewText.Select", "x-component-props": {
                            multiple: true,
                        }, default: ['123', '222'], enum: [
                            { label: 'A111', value: '123' },
                            { label: 'A222', value: '222' },
                        ] }),
                    React.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u65E5\u671F\u9884\u89C8", "x-component": "PreviewText.DatePicker" }),
                    React.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "Cascader\u9884\u89C8", "x-component": "PreviewText.Cascader", default: ['hangzhou', 'yuhang'], enum: [
                            {
                                label: '杭州',
                                value: 'hangzhou',
                            },
                            {
                                label: '余杭',
                                value: 'yuhang',
                            },
                        ] })),
                React.createElement(FormButtonGroup.FormItem, null,
                    React.createElement(Button, { onClick: function () {
                            form.setState(function (state) {
                                state.editable = !state.editable;
                            });
                        } }, "\u5207\u6362\u9605\u8BFB\u6001"))))));
});
//# sourceMappingURL=index_2.js.map