import React from 'react';
import { PreviewText, FormItem, FormLayout } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
var SchemaField = createSchemaField({
    components: {
        FormItem: FormItem,
        PreviewText: PreviewText,
    },
});
var form = createForm();
export default (function () {
    return (React.createElement(FormLayout, { labelCol: 6, wrapperCol: 10 },
        React.createElement(FormProvider, { form: form },
            React.createElement(SchemaField, null,
                React.createElement(SchemaField.String, { "x-decorator": "FormItem", title: "\u6587\u672C\u9884\u89C8", "x-component": "PreviewText.Input", default: 'Hello world' }),
                React.createElement(SchemaField.String, { "x-decorator": "FormItem", title: "\u9009\u62E9\u9879\u9884\u89C8", "x-component": "PreviewText.Select", "x-component-props": {
                        multiple: true,
                    }, default: ['123', '222'], enum: [
                        { label: 'A111', value: '123' },
                        { label: 'A222', value: '222' },
                    ] }),
                React.createElement(SchemaField.String, { "x-decorator": "FormItem", title: "\u65E5\u671F\u9884\u89C8", "x-component": "PreviewText.DatePicker", default: '2020-11-23 22:15:20' }),
                React.createElement(SchemaField.String, { "x-decorator": "FormItem", title: "Cascader\u9884\u89C8", "x-component": "PreviewText.Cascader", default: ['hangzhou', 'yuhang'], enum: [
                        {
                            label: '杭州',
                            value: 'hangzhou',
                        },
                        {
                            label: '余杭',
                            value: 'yuhang',
                        },
                    ] })))));
});
//# sourceMappingURL=index_1.js.map