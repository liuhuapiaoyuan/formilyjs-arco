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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormButtonGroup = void 0;
/**
 * 1. FormItem????????????
 * 2. ??????????????????????????????
 * 3. ????????????
 * 4. ????????????
 */
var react_1 = __importStar(require("react"));
var react_sticky_box_1 = __importDefault(require("react-sticky-box"));
var web_react_1 = require("@arco-design/web-react");
var form_item_1 = require("../form-item");
var __builtins__1 = require("../__builtins__");
var classnames_1 = __importDefault(require("classnames"));
require("./index.scss");
function getInheritedBackgroundColor(el) {
    // get default style for current browser
    var defaultStyle = getDefaultBackground(); // typically "rgba(0, 0, 0, 0)"
    // get computed color for el
    var backgroundColor = window.getComputedStyle(el).backgroundColor;
    // if we got a real value, return it
    if (backgroundColor != defaultStyle)
        return backgroundColor;
    // if we've reached the top parent el without getting an explicit color, return default
    if (!el.parentElement)
        return defaultStyle;
    // otherwise, recurse and try again on parent element
    return getInheritedBackgroundColor(el.parentElement);
}
function getDefaultBackground() {
    // have to add to the document in order to use getComputedStyle
    var div = document.createElement('div');
    document.head.appendChild(div);
    var bg = window.getComputedStyle(div).backgroundColor;
    document.head.removeChild(div);
    return bg;
}
var FormButtonGroup = function (_a) {
    var align = _a.align, size = _a.size, props = __rest(_a, ["align", "size"]);
    var prefixCls = (0, __builtins__1.usePrefixCls)('button-group');
    return (react_1.default.createElement(web_react_1.Space, __assign({}, props, { size: size, className: (0, classnames_1.default)(prefixCls, props.className), style: __assign(__assign({}, props.style), { justifyContent: align === 'left'
                ? 'flex-start'
                : align === 'right'
                    ? 'flex-end'
                    : 'center', display: 'flex' }) }), props.children));
};
exports.FormButtonGroup = FormButtonGroup;
exports.FormButtonGroup.defaultProps = {
    align: 'left',
};
exports.FormButtonGroup.FormItem = function (_a) {
    var _b;
    var spacing = _a.size, props = __rest(_a, ["size"]);
    return (react_1.default.createElement(form_item_1.BaseItem, __assign({}, props, { label: " ", style: __assign(__assign({ margin: 0, padding: 0 }, props.style), { width: '100%' }), colon: false }), ((_b = props.children) === null || _b === void 0 ? void 0 : _b['length']) ? (react_1.default.createElement(web_react_1.Space, { size: spacing }, props.children)) : (props.children)));
};
exports.FormButtonGroup.Sticky = function (_a) {
    var align = _a.align, props = __rest(_a, ["align"]);
    var ref = (0, react_1.useRef)();
    var _b = __read((0, react_1.useState)('transparent'), 2), color = _b[0], setColor = _b[1];
    var prefixCls = (0, __builtins__1.usePrefixCls)('button-group');
    (0, react_1.useLayoutEffect)(function () {
        if (ref.current) {
            var computed = getInheritedBackgroundColor(ref.current);
            if (computed !== color) {
                setColor(computed);
            }
        }
    });
    return (react_1.default.createElement(react_sticky_box_1.default, __assign({}, props, { className: (0, classnames_1.default)("".concat(prefixCls, "-sticky"), props.className), style: __assign({ backgroundColor: color }, props.style), bottom: true }),
        react_1.default.createElement("div", { ref: ref, className: "".concat(prefixCls, "-sticky-inner"), style: __assign(__assign({}, props.style), { justifyContent: align === 'left'
                    ? 'flex-start'
                    : align === 'right'
                        ? 'flex-end'
                        : 'center' }) }, props.children)));
};
exports.FormButtonGroup.Sticky.defaultProps = {
    align: 'left',
};
exports.default = exports.FormButtonGroup;
//# sourceMappingURL=index.js.map