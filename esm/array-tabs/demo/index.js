import React, { useRef } from 'react';
import { FormConsumer, FormProvider } from '@formily/react';
import { SchemaForm } from '@formily/arco';
import { Button, Typography } from '@arco-design/web-react';
import { createForm } from '@formily/core';
var schema = {
    type: 'object',
    properties: {
        string_array: {
            type: 'array',
            title: '字符串数组',
            'x-decorator': 'FormItem',
            maxItems: 3,
            'x-component': 'ArrayTabs',
            items: {
                type: 'string',
                'x-decorator': 'FormItem',
                required: true,
                'x-component': 'Input',
                'x-component-props': {
                    autoFocus: true,
                },
            },
        },
        array: {
            type: 'array',
            title: '对象数组',
            'x-decorator': 'FormItem',
            maxItems: 3,
            'x-component': 'ArrayTabs',
            items: {
                type: 'object',
                properties: {
                    aaa: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'AAA',
                        required: true,
                        'x-component': 'Input',
                    },
                    bbb: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'BBB',
                        required: true,
                        'x-component': 'Input',
                    },
                },
            },
        },
    },
};
var form = createForm();
export default (function () {
    var formRef = useRef();
    return (React.createElement("div", null,
        React.createElement(FormProvider, { form: form },
            React.createElement(SchemaForm, { ref: formRef, schema: schema }),
            React.createElement(FormConsumer, null, function (form) { return (React.createElement("div", null,
                React.createElement(Typography.Text, { code: true }, JSON.stringify(form === null || form === void 0 ? void 0 : form.values)))); }),
            React.createElement(Button, { onClick: function () { var _a, _b, _c; return (_c = (_b = (_a = formRef === null || formRef === void 0 ? void 0 : formRef.current) === null || _a === void 0 ? void 0 : _a.getForm) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.submit(); } }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index.js.map