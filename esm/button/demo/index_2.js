import React from 'react';
import { SchemaForm } from '@formily/arco';
var schema = {
    type: 'object',
    properties: {
        input: {
            type: 'string',
            title: 'Input',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        button: {
            type: 'void',
            'x-component': 'Button',
            'x-component-props': {
                onClick: function () {
                    console.log('onclick');
                },
            },
            'x-content': 'Button',
            'x-reactions': {
                dependencies: ['.input'],
                fulfill: {
                    schema: {
                        'x-component-props.onClick': '{{() => {console.log("onclick: ", $deps[0])}}}',
                    },
                },
            },
        },
    },
};
export default (function () { return React.createElement(SchemaForm, { schema: schema }); });
//# sourceMappingURL=index_2.js.map