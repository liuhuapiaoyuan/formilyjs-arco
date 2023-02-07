"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
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
var formTab = (_a = arco_1.FormTab.createFormTab) === null || _a === void 0 ? void 0 : _a.call(arco_1.FormTab, 'tab1');
exports.default = (function () {
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SchemaField, null,
            react_1.default.createElement(SchemaField.Void, { "x-component": "FormTab", "x-component-props": { formTab: formTab } },
                react_1.default.createElement(SchemaField.Void, { name: "tab1", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A1' } },
                    react_1.default.createElement(SchemaField.String, { name: "aaa", "x-decorator": "FormItem", title: "AAA", required: true, "x-component": "Input" })),
                react_1.default.createElement(SchemaField.Void, { name: "tab2", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A2' } },
                    react_1.default.createElement(SchemaField.String, { name: "bbb", "x-decorator": "FormItem", title: "BBB", required: true, "x-component": "Input" })),
                react_1.default.createElement(SchemaField.Void, { name: "tab3", "x-component": "FormTab.TabPane", "x-component-props": { tab: 'A3' } },
                    react_1.default.createElement(SchemaField.String, { name: "ccc", "x-decorator": "FormItem", title: "CCC", required: true, "x-component": "Input" })))),
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
//# sourceMappingURL=index_1.js.map