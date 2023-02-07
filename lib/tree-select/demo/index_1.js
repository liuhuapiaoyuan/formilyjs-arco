"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, null,
        react_1.default.createElement(arco_1.SchemaField.Number, { name: "select", title: "\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "TreeSelect", enum: [
                {
                    label: '亚洲',
                    value: 'Asia',
                    key: '0',
                    children: [
                        {
                            label: '中国',
                            value: 'China',
                            key: '0-0',
                            children: [
                                {
                                    label: '北京',
                                    value: 'Beijing',
                                    key: '0-0-0',
                                },
                                {
                                    label: '上海',
                                    value: 'Shanghai',
                                    key: '0-0-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '北美洲',
                    value: 'North America',
                    key: '1',
                },
            ], "x-component-props": {
                style: {
                    width: 200,
                },
            } })),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_1.js.map