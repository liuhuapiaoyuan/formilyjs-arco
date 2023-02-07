"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
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
exports.default = (function () { return react_1.default.createElement(arco_1.SchemaForm, { schema: schema }); });
//# sourceMappingURL=index_2.js.map