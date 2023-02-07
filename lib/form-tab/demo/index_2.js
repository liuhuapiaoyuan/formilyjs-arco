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
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        FormTab: arco_1.FormTab,
        Input: arco_1.Input,
    },
});
var form = (0, core_1.createForm)();
var formTab = arco_1.FormTab.createFormTab('tab3');
var schema = {
    type: 'object',
    properties: {
        tabletest: {
            type: 'string',
            title: '其他的',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        collapse: {
            type: 'void',
            'x-component': 'FormTab',
            'x-component-props': {
                formTab: formTab,
            },
            properties: {
                tab1: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab1',
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
                tab2: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab2',
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
                tab3: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        tab: 'tab3',
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
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, { schema: schema }),
        react_1.default.createElement(react_2.FormConsumer, null, function () { return react_1.default.createElement("code", null, JSON.stringify(form.values)); }),
        react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
            react_1.default.createElement(web_react_1.Button, { onClick: function () {
                    form.query('tab3').take(function (field) {
                        field.visible = !field.visible;
                    });
                } }, "\u663E\u793A/\u9690\u85CF\u6700\u540E\u4E00\u4E2ATab"),
            react_1.default.createElement(web_react_1.Button, { onClick: function () {
                    formTab === null || formTab === void 0 ? void 0 : formTab.setActiveKey('tab2');
                } }, "\u5207\u6362\u7B2C\u4E8C\u4E2ATab"),
            react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index_2.js.map