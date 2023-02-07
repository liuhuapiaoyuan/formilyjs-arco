"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var config_1 = __importDefault(require("./config"));
var SF = (0, react_2.createSchemaField)({
    components: {
        Input: arco_1.Input,
        FormItem: arco_1.FormItem,
        FormLayout: arco_1.FormLayout,
        ArrayItems: arco_1.ArrayItems,
        Select: arco_1.Select,
        DatePicker: arco_1.DatePicker,
    },
});
var form = (0, core_1.createForm)();
exports.default = (function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(SF, { schema: config_1.default }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("h4", null, "FormItem: "),
        react_1.default.createElement(SF, null,
            react_1.default.createElement(SF.Void, { "x-component": "FormLayout", "x-component-props": {
                    labelCol: 6,
                    wrapperCol: 10,
                    size: 'small',
                } },
                react_1.default.createElement(SF.String, { name: "firstInput", title: "rtl\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-decorator-props": {
                        direction: 'rtl',
                    }, required: true }),
                react_1.default.createElement(SF.String, { name: "secInput", title: "\u8F93\u5165\u6846", "x-decorator": "FormItem", "x-component": "Input", "x-component-props": {}, required: true })))))); });
//# sourceMappingURL=index_4.js.map