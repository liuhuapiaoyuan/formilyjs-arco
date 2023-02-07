"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var web_react_1 = require("@arco-design/web-react");
var schema = {
    type: 'object',
    properties: {
        aaa: {
            type: 'string',
            title: '输入框1',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        bbb: {
            type: 'string',
            title: '输入框2',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        ccc: {
            type: 'string',
            title: '输入框3',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
        ddd: {
            type: 'string',
            title: '输入框4',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
        },
    },
};
exports.default = (function () { return (react_1.default.createElement(web_react_1.Button, { onClick: function () {
        (0, arco_1.FormDrawer)('弹窗表单', function () { return (react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
            react_1.default.createElement(arco_1.SchemaRender, { schema: schema }),
            react_1.default.createElement(arco_1.FormDrawer.Footer, null,
                react_1.default.createElement(arco_1.FormButtonGroup, { align: "right" },
                    react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4"),
                    react_1.default.createElement(arco_1.Reset, null, "\u91CD\u7F6E"))))); })
            .forOpen(function (form, next) {
            setTimeout(function () {
                next({
                    initialValues: {
                        aaa: '123',
                    },
                });
            }, 1000);
        })
            .open()
            .then(console.log);
    } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")); });
//# sourceMappingURL=index_2.js.map