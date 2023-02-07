"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addOptions = function (field) {
    setTimeout(function () {
        field.dataSource = ['Photography', 'Movies', 'Running'];
    }, 10);
};
var config = {
    type: 'object',
    properties: {
        checkbox: {
            type: 'string',
            title: 'checkbox',
            'x-decorator': 'FormItem',
            'x-component': 'Checkbox',
            'x-content': 'apple',
        },
        checkboxGroup1: {
            type: 'string',
            title: 'checkboxGroup',
            'x-decorator': 'FormItem',
            'x-component': 'CheckboxGroup',
            'enum': ['Photography', 'Movies', 'Running'],
            'x-component-props': {},
        },
        checkboxGroup: {
            type: 'string',
            title: '动态checkboxGroup',
            'x-decorator': 'FormItem',
            'x-component': 'CheckboxGroup',
            'x-component-props': {},
            'x-reactions': [addOptions],
        },
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map