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
    react_1.default.createElement(react_2.Field, { name: "select", title: "\u9009\u62E9\u6846", dataSource: [
            {
                label: '选项1',
                value: 1,
                key: '0',
                children: [
                    {
                        label: 'Child Node1',
                        value: '0-0-0',
                        key: '0-0-0',
                    },
                    {
                        label: 'Child Node2',
                        value: '0-0-1',
                        key: '0-0-1',
                    },
                    {
                        label: 'Child Node3',
                        value: '0-0-2',
                        key: '0-0-2',
                    },
                ],
            },
            {
                label: '选项2',
                value: 2,
                key: '1',
                children: [
                    {
                        label: 'Child Node3',
                        value: '0-1-0',
                        key: '0-1-0',
                    },
                    {
                        label: 'Child Node4',
                        value: '0-1-1',
                        key: '0-1-1',
                    },
                    {
                        label: 'Child Node5',
                        value: '0-1-2',
                        key: '0-1-2',
                    },
                ],
            },
        ], decorator: [arco_1.FormItem], component: [arco_1.TreeSelect] }),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_5.js.map