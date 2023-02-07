import React from 'react';
import { Input, ArrayItems, FormItem, FormLayout, Select, DatePicker, } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import config from './config';
var SF = createSchemaField({
    components: {
        Input: Input,
        FormItem: FormItem,
        FormLayout: FormLayout,
        ArrayItems: ArrayItems,
        Select: Select,
        DatePicker: DatePicker,
    },
});
var form = createForm();
export default (function () { return (React.createElement(React.Fragment, null,
    React.createElement(FormProvider, { form: form },
        React.createElement(SF, { schema: config }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("h4", null, "FormItem: "),
        React.createElement(SF, null,
            React.createElement(SF.Void, { "x-component": "FormLayout", "x-component-props": {
                    labelCol: 6,
                    wrapperCol: 10,
                    size: 'small',
                } },
                React.createElement(SF.String, { name: "firstInput", title: "rtl\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        direction: 'rtl',
                    }, required: true }),
                React.createElement(SF.String, { name: "secInput", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {}, required: true })))))); });
//# sourceMappingURL=index_4.js.map