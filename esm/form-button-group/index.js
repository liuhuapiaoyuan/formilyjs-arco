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
/**
 * 1. FormItem网格布局
 * 2. 居中，居右，居左布局
 * 3. 行内布局
 * 4. 吸底布局
 */
import React, { useRef, useLayoutEffect, useState } from 'react';
import StickyBox from 'react-sticky-box';
import { Space } from '@arco-design/web-react';
import { BaseItem } from '../form-item';
import { usePrefixCls } from '../__builtins__';
import cls from 'classnames';
import './index.scss';
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
export var FormButtonGroup = function (_a) {
    var align = _a.align, size = _a.size, props = __rest(_a, ["align", "size"]);
    var prefixCls = usePrefixCls('button-group');
    return (React.createElement(Space, __assign({}, props, { size: size, className: cls(prefixCls, props.className), style: __assign(__assign({}, props.style), { justifyContent: align === 'left'
                ? 'flex-start'
                : align === 'right'
                    ? 'flex-end'
                    : 'center', display: 'flex' }) }), props.children));
};
FormButtonGroup.defaultProps = {
    align: 'left',
};
FormButtonGroup.FormItem = function (_a) {
    var _b;
    var spacing = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement(BaseItem, __assign({}, props, { label: " ", style: __assign(__assign({ margin: 0, padding: 0 }, props.style), { width: '100%' }), colon: false }), ((_b = props.children) === null || _b === void 0 ? void 0 : _b['length']) ? (React.createElement(Space, { size: spacing }, props.children)) : (props.children)));
};
FormButtonGroup.Sticky = function (_a) {
    var align = _a.align, props = __rest(_a, ["align"]);
    var ref = useRef();
    var _b = __read(useState('transparent'), 2), color = _b[0], setColor = _b[1];
    var prefixCls = usePrefixCls('button-group');
    useLayoutEffect(function () {
        if (ref.current) {
            var computed = getInheritedBackgroundColor(ref.current);
            if (computed !== color) {
                setColor(computed);
            }
        }
    });
    return (React.createElement(StickyBox, __assign({}, props, { className: cls("".concat(prefixCls, "-sticky"), props.className), style: __assign({ backgroundColor: color }, props.style), bottom: true }),
        React.createElement("div", { ref: ref, className: "".concat(prefixCls, "-sticky-inner"), style: __assign(__assign({}, props.style), { justifyContent: align === 'left'
                    ? 'flex-start'
                    : align === 'right'
                        ? 'flex-end'
                        : 'center' }) }, props.children)));
};
FormButtonGroup.Sticky.defaultProps = {
    align: 'left',
};
export default FormButtonGroup;
//# sourceMappingURL=index.js.map