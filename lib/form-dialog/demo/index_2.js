"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
    },
});
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
exports.default = (function () { return (react_1.default.createElement(arco_1.FormDialog.Portal, null,
    react_1.default.createElement(web_react_1.Button, { onClick: function () {
            (0, arco_1.FormDialog)('弹窗表单', function () { return (react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
                react_1.default.createElement(SchemaField, { schema: schema }),
                react_1.default.createElement(arco_1.FormDialog.Footer, null,
                    react_1.default.createElement("span", { style: { marginLeft: 4 } }, "\u6269\u5C55\u6587\u6848")))); })
                .forOpen(function (form, next) {
                setTimeout(function () {
                    next({
                        initialValues: {
                            aaa: '123',
                        },
                    });
                }, 1000);
            })
                .forConfirm(function (form, next) {
                setTimeout(function () {
                    console.log(form);
                    next(form);
                }, 1000);
            })
                .forCancel(function (form, next) {
                setTimeout(function () {
                    console.log(form);
                    next(form);
                }, 1000);
            })
                .open()
                .then(console.log);
        } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355"))); });
//# sourceMappingURL=index_2.js.map