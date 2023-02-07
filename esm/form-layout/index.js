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
import React, { createContext, useContext } from 'react';
import { usePrefixCls } from '../__builtins__/hooks';
import cls from 'classnames';
import './index.scss';
export var FormLayoutContext = createContext({});
export var FormLayoutShallowContext = createContext({});
export var useFormLayout = function () { return useContext(FormLayoutContext); };
export var useFormShallowLayout = function () { return useContext(FormLayoutShallowContext); };
export var FormLayout = function (_a) {
    var _b;
    var shallow = _a.shallow, children = _a.children, prefixCls = _a.prefixCls, className = _a.className, style = _a.style, props = __rest(_a, ["shallow", "children", "prefixCls", "className", "style"]);
    var formPrefixCls = usePrefixCls('form');
    var semiRtlPrefixCls = usePrefixCls('', { prefixCls: 'semi-rtl' });
    var layoutPrefixCls = usePrefixCls('layout', { prefixCls: prefixCls });
    var layoutClassName = cls(layoutPrefixCls, (_b = {},
        _b["".concat(formPrefixCls, "-").concat(props.layout)] = props.layout,
        _b["".concat(semiRtlPrefixCls)] = props.direction === 'rtl',
        _b["".concat(formPrefixCls, "-").concat(props.size)] = props.size,
        _b), className);
    var renderChildren = function () {
        if (shallow) {
            return (React.createElement(FormLayoutShallowContext.Provider, { value: props }, children));
        }
        else {
            return (React.createElement(FormLayoutContext.Provider, { value: props }, children));
        }
    };
    return (React.createElement("div", { className: layoutClassName, style: style }, renderChildren()));
};
FormLayout.defaultProps = {
    shallow: true,
};
FormLayout.useFormLayout = useFormLayout;
FormLayout.useFormShallowLayout = useFormShallowLayout;
export default FormLayout;
//# sourceMappingURL=index.js.map