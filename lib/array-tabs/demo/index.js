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
var react_2 = require("@formily/react");
var arco_1 = require("@formily/arco");
var web_react_1 = require("@arco-design/web-react");
var core_1 = require("@formily/core");
var schema = {
    type: 'object',
    properties: {
        string_array: {
            type: 'array',
            title: '字符串数组',
            'x-decorator': 'FormItem',
            maxItems: 3,
            'x-component': 'ArrayTabs',
            items: {
                type: 'string',
                'x-decorator': 'FormItem',
                required: true,
                'x-component': 'Input',
                'x-component-props': {
                    autoFocus: true,
                },
            },
        },
        array: {
            type: 'array',
            title: '对象数组',
            'x-decorator': 'FormItem',
            maxItems: 3,
            'x-component': 'ArrayTabs',
            items: {
                type: 'object',
                properties: {
                    aaa: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'AAA',
                        required: true,
                        'x-component': 'Input',
                    },
                    bbb: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        title: 'BBB',
                        required: true,
                        'x-component': 'Input',
                    },
                },
            },
        },
    },
};
var form = (0, core_1.createForm)();
exports.default = (function () {
    var formRef = (0, react_1.useRef)();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_2.FormProvider, { form: form },
            react_1.default.createElement(arco_1.SchemaForm, { ref: formRef, schema: schema }),
            react_1.default.createElement(react_2.FormConsumer, null, function (form) { return (react_1.default.createElement("div", null,
                react_1.default.createElement(web_react_1.Typography.Text, { code: true }, JSON.stringify(form === null || form === void 0 ? void 0 : form.values)))); }),
            react_1.default.createElement(web_react_1.Button, { onClick: function () { var _a, _b, _c; return (_c = (_b = (_a = formRef === null || formRef === void 0 ? void 0 : formRef.current) === null || _a === void 0 ? void 0 : _a.getForm) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.submit(); } }, "\u63D0\u4EA4"))));
});
//# sourceMappingURL=index.js.map