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
var Input = (0, react_2.connect)(web_react_1.Input, (0, react_2.mapReadPretty)(arco_1.PreviewText.Input));
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        Input: Input,
        FormItem: arco_1.FormItem,
        PreviewText: arco_1.PreviewText,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () {
    return (react_1.default.createElement(arco_1.PreviewText.Placeholder, { value: "\u6682\u65E0\u6570\u636E" },
        react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
            react_1.default.createElement(react_2.FormProvider, { form: form },
                react_1.default.createElement(SchemaField, null,
                    react_1.default.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u6587\u672C\u9884\u89C8", required: true, "x-component": "Input", default: 'Hello world' }),
                    react_1.default.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u9009\u62E9\u9879\u9884\u89C8", "x-component": "PreviewText.Select", "x-component-props": {
                            multiple: true,
                        }, default: ['123', '222'], enum: [
                            { label: 'A111', value: '123' },
                            { label: 'A222', value: '222' },
                        ] }),
                    react_1.default.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "\u65E5\u671F\u9884\u89C8", "x-component": "PreviewText.DatePicker" }),
                    react_1.default.createElement(SchemaField.Markup, { type: "string", "x-decorator": "FormItem", title: "Cascader\u9884\u89C8", "x-component": "PreviewText.Cascader", default: ['hangzhou', 'yuhang'], enum: [
                            {
                                label: '杭州',
                                value: 'hangzhou',
                            },
                            {
                                label: '余杭',
                                value: 'yuhang',
                            },
                        ] })),
                react_1.default.createElement(arco_1.FormButtonGroup.FormItem, null,
                    react_1.default.createElement(web_react_1.Button, { onClick: function () {
                            form.setState(function (state) {
                                state.editable = !state.editable;
                            });
                        } }, "\u5207\u6362\u9605\u8BFB\u6001"))))));
});
//# sourceMappingURL=index_2.js.map