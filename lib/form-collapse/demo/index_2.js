"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var form = (0, core_1.createForm)();
var formCollapse = arco_1.FormCollapse.createFormCollapse();
var schema = {
    type: 'object',
    properties: {
        collapse: {
            type: 'void',
            title: '折叠面板',
            'x-decorator': 'FormItem',
            'x-component': 'FormCollapse',
            'x-component-props': {
                defaultActiveKey: '1',
                formCollapse: formCollapse,
            },
            properties: {
                panel1: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A1',
                        name: '1',
                    },
                    properties: {
                        aaa: {
                            type: 'string',
                            title: 'AAA',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
                panel2: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A2',
                        name: '2',
                    },
                    properties: {
                        bbb: {
                            type: 'string',
                            title: 'BBB',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
                panel3: {
                    type: 'void',
                    'x-component': 'FormCollapse.CollapsePanel',
                    'x-component-props': {
                        header: 'A3',
                        name: '3',
                    },
                    properties: {
                        ccc: {
                            type: 'string',
                            title: 'CCC',
                            'x-decorator': 'FormItem',
                            required: true,
                            'x-component': 'Input',
                        },
                    },
                },
            },
        },
    },
};
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
        react_1.default.createElement(arco_1.SchemaRender, { schema: schema }),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(web_react_1.Button, { onClick: function () {
                    form.query('panel3').take(function (field) {
                        field.visible = !field.visible;
                    });
                } }, "\u663E\u793A/\u9690\u85CF\u6700\u540E\u4E00\u4E2ATab"),
            react_1.default.createElement(web_react_1.Button, { onClick: function () {
                    formCollapse.toggleActiveKey('2');
                } }, "\u5207\u6362\u7B2C\u4E8C\u4E2ATab"),
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))))); });
//# sourceMappingURL=index_2.js.map