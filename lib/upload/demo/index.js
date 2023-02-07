"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var form = (0, core_1.createForm)({
    initialValues: {
        input: 'sadsa',
        upload: [
            {
                name: 'temp.png',
                url: 'https://secure.gravatar.com/avatar/b0de023b7c0d631fe1c283d0389cd72c?s=800&d=identicon',
            },
        ],
    },
});
var NormalUpload = function (props) {
    console.log('normal upload: ', props.fileList, props);
    return react_1.default.createElement(arco_1.Upload, __assign({}, props));
};
var Demo = function () {
    var _a = __read((0, react_1.useState)(''), 2), a = _a[0], seta = _a[1];
    return (react_1.default.createElement(react_2.FormProvider, { form: form },
        react_1.default.createElement(web_react_1.Input, { value: a, onChange: seta }),
        react_1.default.createElement("div", null, a),
        react_1.default.createElement(react_2.Field, { name: "input", component: [
                web_react_1.Input,
                {
                    placeholder: '请输入',
                    allowClear: true,
                },
            ] }),
        react_1.default.createElement(react_2.Field, { name: "upload", title: "\u4E0A\u4F20", required: true, decorator: [arco_1.FormItem], component: [
                NormalUpload,
                {
                    onChange: function () {
                        var p = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            p[_i] = arguments[_i];
                        }
                        return console.log.apply(console, __spreadArray(['upload onChange: '], __read(p), false));
                    },
                    action: 'https://arco.design/api/upload',
                },
            ] }),
        react_1.default.createElement(react_2.Field, { name: "images", title: "\u4F20\u56FE", required: true, decorator: [arco_1.FormItem], component: [
                arco_1.Upload,
                {
                    listType: 'picture-card',
                    accept: 'image/*',
                    onChange: function () {
                        var p = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            p[_i] = arguments[_i];
                        }
                        return console.log.apply(console, __spreadArray(['upload onChange: '], __read(p), false));
                    },
                    action: 'https://arco.design/api/upload',
                },
            ] }),
        react_1.default.createElement(arco_1.Reset, null, "Reset"),
        react_1.default.createElement(react_2.FormConsumer, null, function () { return (react_1.default.createElement(web_react_1.Typography.Text, { code: true }, JSON.stringify(form.values))); })));
};
exports.default = Demo;
//# sourceMappingURL=index.js.map