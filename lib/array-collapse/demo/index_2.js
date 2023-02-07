"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
        ArrayCollapse: arco_1.ArrayCollapse,
    },
});
var form = (0, core_1.createForm)();
var schema = {
    type: 'object',
    properties: {
        string_array: {
            type: 'array',
            'x-component': 'ArrayCollapse',
            'x-component-props': {
                arrayBaseProps: {
                    onRemove: console.log,
                },
            },
            maxItems: 3,
            'x-decorator': 'FormItem',
            items: {
                type: 'object',
                'x-component': 'ArrayCollapse.CollapsePanel',
                'x-component-props': {
                    header: '字符串数组',
                },
                properties: {
                    index: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Index',
                    },
                    input: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'Input',
                        required: true,
                        'x-component': 'Input',
                    },
                    remove: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Remove',
                    },
                    moveUp: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveUp',
                    },
                    moveDown: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveDown',
                    },
                },
            },
            properties: {
                addition: {
                    type: 'void',
                    title: '添加条目',
                    'x-component': 'ArrayCollapse.Addition',
                },
            },
        },
        array: {
            type: 'array',
            'x-component': 'ArrayCollapse',
            maxItems: 3,
            'x-decorator': 'FormItem',
            items: {
                type: 'object',
                'x-component': 'ArrayCollapse.CollapsePanel',
                'x-component-props': {
                    header: '对象数组',
                },
                properties: {
                    index: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Index',
                    },
                    input: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'Input',
                        required: true,
                        'x-component': 'Input',
                    },
                    remove: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Remove',
                    },
                    moveUp: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveUp',
                    },
                    moveDown: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveDown',
                    },
                },
            },
            properties: {
                addition: {
                    type: 'void',
                    title: '添加条目',
                    'x-component': 'ArrayCollapse.Addition',
                },
            },
        },
        array_unshift: {
            type: 'array',
            'x-component': 'ArrayCollapse',
            maxItems: 3,
            'x-decorator': 'FormItem',
            items: {
                type: 'object',
                'x-component': 'ArrayCollapse.CollapsePanel',
                'x-component-props': {
                    header: '对象数组',
                },
                properties: {
                    index: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Index',
                    },
                    input: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'Input',
                        required: true,
                        'x-component': 'Input',
                    },
                    remove: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.Remove',
                    },
                    moveUp: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveUp',
                    },
                    moveDown: {
                        type: 'void',
                        'x-component': 'ArrayCollapse.MoveDown',
                    },
                },
            },
            properties: {
                addition: {
                    type: 'void',
                    title: '添加条目(unshift)',
                    'x-component': 'ArrayCollapse.Addition',
                    'x-component-props': {
                        method: 'unshift',
                    },
                },
            },
        },
    },
};
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, { schema: schema }),
        react_1.default.createElement(arco_1.FormButtonGroup, null,
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_2.js.map