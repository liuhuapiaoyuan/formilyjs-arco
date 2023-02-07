"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var arco_1 = require("@formily/arco");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var SchemaField = (0, react_2.createSchemaField)({
    components: {
        FormItem: arco_1.FormItem,
        Input: arco_1.Input,
    },
});
var Context = (0, react_1.createContext)(null);
var PortalId = '可以传，也可以不传的ID，默认是form-dialog';
exports.default = (function () { return (react_1.default.createElement(Context.Provider, { value: "\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u53EF\u4EE5\u76F4\u63A5\u4F20\u5230\u5F39\u7A97\u5185\u90E8\uFF0C\u53EA\u9700\u8981ID\u4E00\u81F4\u5373\u53EF" },
    react_1.default.createElement(arco_1.FormDialog.Portal, { id: PortalId },
        react_1.default.createElement(web_react_1.Button, { onClick: function () {
                (0, arco_1.FormDialog)('弹窗表单', PortalId, function (form) {
                    console.log((0, react_1.useContext)(Context));
                    return (react_1.default.createElement(arco_1.FormLayout, { labelCol: 6, wrapperCol: 10 },
                        react_1.default.createElement(SchemaField, null,
                            react_1.default.createElement(SchemaField.String, { name: "aaa", required: true, title: "\u8F93\u5165\u68461", "x-decorator": "FormItem", "x-component": "Input" }),
                            react_1.default.createElement(SchemaField.String, { name: "bbb", required: true, title: "\u8F93\u5165\u68462", "x-decorator": "FormItem", "x-component": "Input" }),
                            react_1.default.createElement(SchemaField.String, { name: "ccc", required: true, title: "\u8F93\u5165\u68463", "x-decorator": "FormItem", "x-component": "Input" }),
                            react_1.default.createElement(SchemaField.String, { name: "ddd", required: true, title: "\u8F93\u5165\u68464", "x-decorator": "FormItem", "x-component": "Input" })),
                        react_1.default.createElement(arco_1.FormDialog.Footer, null,
                            react_1.default.createElement("span", { style: { marginLeft: 4 } },
                                "\u6269\u5C55\u6587\u6848\uFF1A",
                                form.values.aaa))));
                })
                    .forOpen(function (formInst, next) {
                    setTimeout(function () {
                        next({
                            initialValues: {
                                aaa: '123',
                            },
                        });
                    }, 1000);
                })
                    .forConfirm(function (formInst, next) {
                    setTimeout(function () {
                        console.log(formInst);
                        next(formInst);
                    }, 1000);
                })
                    .forCancel(function (formInst, next) {
                    setTimeout(function () {
                        console.log(formInst);
                        next(formInst);
                    }, 1000);
                })
                    .open()
                    .then(console.log)
                    .catch(console.error);
            } }, "\u70B9\u6211\u6253\u5F00\u8868\u5355")))); });
//# sourceMappingURL=index_1.js.map