"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var react_2 = require("@formily/react");
var core_1 = require("@formily/core");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
        FormGrid: arco_1.FormGrid,
    },
});
var form = (0, core_1.createForm)();
var schema = {
    type: 'object',
    properties: {
        grid: {
            type: 'void',
            'x-component': 'FormGrid',
            'x-component-props': {
                minColumns: [4, 6, 10],
            },
            properties: {
                aaa: {
                    type: 'string',
                    title: 'AAA',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                bbb: {
                    type: 'string',
                    title: 'BBB',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                ccc: {
                    type: 'string',
                    title: 'CCC',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                ddd: {
                    type: 'string',
                    title: 'DDD',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                eee: {
                    type: 'string',
                    title: 'EEE',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                fff: {
                    type: 'string',
                    title: 'FFF',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
                ggg: {
                    type: 'string',
                    title: 'GGG',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
            },
        },
    },
};
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, { schema: schema })));
});
//# sourceMappingURL=index_2.js.map