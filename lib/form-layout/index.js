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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormLayout = exports.useFormShallowLayout = exports.useFormLayout = exports.FormLayoutShallowContext = exports.FormLayoutContext = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../__builtins__/hooks");
var classnames_1 = __importDefault(require("classnames"));
require("./index.scss");
exports.FormLayoutContext = (0, react_1.createContext)({});
exports.FormLayoutShallowContext = (0, react_1.createContext)({});
var useFormLayout = function () { return (0, react_1.useContext)(exports.FormLayoutContext); };
exports.useFormLayout = useFormLayout;
var useFormShallowLayout = function () { return (0, react_1.useContext)(exports.FormLayoutShallowContext); };
exports.useFormShallowLayout = useFormShallowLayout;
var FormLayout = function (_a) {
    var _b;
    var shallow = _a.shallow, children = _a.children, prefixCls = _a.prefixCls, className = _a.className, style = _a.style, props = __rest(_a, ["shallow", "children", "prefixCls", "className", "style"]);
    var formPrefixCls = (0, hooks_1.usePrefixCls)('form');
    var semiRtlPrefixCls = (0, hooks_1.usePrefixCls)('', { prefixCls: 'semi-rtl' });
    var layoutPrefixCls = (0, hooks_1.usePrefixCls)('layout', { prefixCls: prefixCls });
    var layoutClassName = (0, classnames_1.default)(layoutPrefixCls, (_b = {},
        _b["".concat(formPrefixCls, "-").concat(props.layout)] = props.layout,
        _b["".concat(semiRtlPrefixCls)] = props.direction === 'rtl',
        _b["".concat(formPrefixCls, "-").concat(props.size)] = props.size,
        _b), className);
    var renderChildren = function () {
        if (shallow) {
            return (react_1.default.createElement(exports.FormLayoutShallowContext.Provider, { value: props }, children));
        }
        else {
            return (react_1.default.createElement(exports.FormLayoutContext.Provider, { value: props }, children));
        }
    };
    return (react_1.default.createElement("div", { className: layoutClassName, style: style }, renderChildren()));
};
exports.FormLayout = FormLayout;
exports.FormLayout.defaultProps = {
    shallow: true,
};
exports.FormLayout.useFormLayout = exports.useFormLayout;
exports.FormLayout.useFormShallowLayout = exports.useFormShallowLayout;
exports.default = exports.FormLayout;
//# sourceMappingURL=index.js.map