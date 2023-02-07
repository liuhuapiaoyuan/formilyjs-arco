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
import React, { useRef, useState } from 'react';
import cls from 'classnames';
import { usePrefixCls, pickDataProps } from '../__builtins__';
import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/react';
import { reduce } from '@formily/shared';
import { useFormLayout, useFormShallowLayout, FormLayoutShallowContext, } from '../form-layout';
import { useGridSpan } from '../form-grid';
import { Popover, Tooltip } from '@arco-design/web-react';
import { IconDelete, IconRightCircle, IconInfoCircle, IconQuestionCircle, } from '@arco-design/web-react/icon';
import './index.scss';
var useFormItemLayout = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var shallowFormLayout = useFormShallowLayout();
    var formLayout = useFormLayout();
    var layout = __assign(__assign({}, shallowFormLayout), formLayout);
    return __assign(__assign({}, props), { layout: (_b = (_a = props.layout) !== null && _a !== void 0 ? _a : layout.layout) !== null && _b !== void 0 ? _b : 'horizontal', colon: (_c = props.colon) !== null && _c !== void 0 ? _c : layout.colon, labelAlign: layout.layout === 'vertical'
            ? (_e = (_d = props.labelAlign) !== null && _d !== void 0 ? _d : layout.labelAlign) !== null && _e !== void 0 ? _e : 'left'
            : (_g = (_f = props.labelAlign) !== null && _f !== void 0 ? _f : layout.labelAlign) !== null && _g !== void 0 ? _g : 'right', labelWrap: (_h = props.labelWrap) !== null && _h !== void 0 ? _h : layout.labelWrap, labelWidth: (_j = props.labelWidth) !== null && _j !== void 0 ? _j : layout.labelWidth, wrapperWidth: (_k = props.wrapperWidth) !== null && _k !== void 0 ? _k : layout.wrapperWidth, labelCol: (_l = props.labelCol) !== null && _l !== void 0 ? _l : layout.labelCol, wrapperCol: (_m = props.wrapperCol) !== null && _m !== void 0 ? _m : layout.wrapperCol, wrapperAlign: (_o = props.wrapperAlign) !== null && _o !== void 0 ? _o : layout.wrapperAlign, wrapperWrap: (_p = props.wrapperWrap) !== null && _p !== void 0 ? _p : layout.wrapperWrap, fullness: (_q = props.fullness) !== null && _q !== void 0 ? _q : layout.fullness, size: (_r = props.size) !== null && _r !== void 0 ? _r : layout.size, inset: (_s = props.inset) !== null && _s !== void 0 ? _s : layout.inset, asterisk: props.asterisk, bordered: (_t = props.bordered) !== null && _t !== void 0 ? _t : layout.bordered, feedbackIcon: props.feedbackIcon, feedbackLayout: (_v = (_u = props.feedbackLayout) !== null && _u !== void 0 ? _u : layout.feedbackLayout) !== null && _v !== void 0 ? _v : 'loose', tooltipLayout: (_x = (_w = props.tooltipLayout) !== null && _w !== void 0 ? _w : layout.tooltipLayout) !== null && _x !== void 0 ? _x : 'icon', direction: props.direction === 'rtl' && layout.direction !== 'rtl' ? 'rtl' : 'ltr' });
};
var ICON_MAP = {
    error: React.createElement(IconDelete, null),
    success: React.createElement(IconRightCircle, null),
    warning: React.createElement(IconInfoCircle, null),
};
export var BaseItem = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var _g;
    var children = props.children, others = __rest(props, ["children"]);
    var _h = __read(useState(false), 2), active = _h[0], setActice = _h[1];
    var popoverContainerRef = useRef();
    var formLayout = useFormItemLayout(others);
    var shallowFormLayout = useFormShallowLayout();
    var label = formLayout.label, style = formLayout.style, layout = formLayout.layout, _j = formLayout.colon, colon = _j === void 0 ? false : _j, addonBefore = formLayout.addonBefore, addonAfter = formLayout.addonAfter, asterisk = formLayout.asterisk, _k = formLayout.feedbackStatus, feedbackStatus = _k === void 0 ? 'success' : _k, extra = formLayout.extra, feedbackText = formLayout.feedbackText, fullness = formLayout.fullness, feedbackLayout = formLayout.feedbackLayout, feedbackIcon = formLayout.feedbackIcon, inset = formLayout.inset, _l = formLayout.bordered, bordered = _l === void 0 ? true : _l, labelWidth = formLayout.labelWidth, wrapperWidth = formLayout.wrapperWidth, labelCol = formLayout.labelCol, wrapperCol = formLayout.wrapperCol, labelAlign = formLayout.labelAlign, _m = formLayout.wrapperAlign, wrapperAlign = _m === void 0 ? 'left' : _m, size = formLayout.size, labelWrap = formLayout.labelWrap, wrapperWrap = formLayout.wrapperWrap, tooltip = formLayout.tooltip, _o = formLayout.tooltipProps, tooltipProps = _o === void 0 ? {} : _o, tooltipLayout = formLayout.tooltipLayout, direction = formLayout.direction;
    var labelStyle = __assign({}, formLayout.labelStyle);
    var wrapperStyle = __assign({}, formLayout.wrapperStyle);
    // 固定宽度
    var enableCol = false;
    if (labelWidth || wrapperWidth) {
        if (labelWidth) {
            labelStyle.width = labelWidth;
            labelStyle.maxWidth = labelWidth;
        }
        if (wrapperWidth) {
            wrapperStyle.width = wrapperWidth;
            wrapperStyle.maxWidth = wrapperWidth;
        }
        // 栅格模式
    }
    else if (labelCol || wrapperCol) {
        enableCol = true;
    }
    var prefixCls = usePrefixCls('item', props);
    var semiRtlPrefixCls = usePrefixCls('', { prefixCls: 'semi-rtl' });
    var formatChildren = feedbackLayout === 'popover' ? (React.createElement(Popover, { position: "top", getPopupContainer: function () { return popoverContainerRef.current; }, content: React.createElement("div", { className: cls((_a = {},
                _a["".concat(prefixCls, "-").concat(feedbackStatus, "-help")] = !!feedbackStatus,
                _a["".concat(prefixCls, "-help")] = true,
                _a)) },
            ICON_MAP[feedbackStatus],
            " ",
            feedbackText), popupVisible: !!feedbackText }, children)) : (children);
    var labelChildren = (React.createElement("div", { className: cls("".concat(prefixCls, "-label-content")) },
        React.createElement("label", null, label),
        asterisk && React.createElement("span", { className: cls("".concat(prefixCls, "-asterisk")) }, '*')));
    return (React.createElement("div", __assign({}, pickDataProps(props), { ref: popoverContainerRef, style: __assign(__assign({}, style), { gridColumnStart: "span ".concat(useGridSpan(props.gridSpan)) }), className: cls((_b = {},
            _b["".concat(prefixCls)] = true,
            // FormLayout有direction属性则不根据FormItem的direction属性, FormLayout已经对children做了一层
            _b["".concat(semiRtlPrefixCls)] = direction === 'rtl',
            _b["".concat(prefixCls, "-layout-").concat(layout)] = true,
            _b["".concat(prefixCls, "-").concat(feedbackStatus)] = !!feedbackStatus,
            _b["".concat(prefixCls, "-feedback-has-text")] = !!feedbackText,
            _b["".concat(prefixCls, "-size-").concat(size)] = !!size,
            _b["".concat(prefixCls, "-feedback-layout-").concat(feedbackLayout)] = !!feedbackLayout,
            _b["".concat(prefixCls, "-fullness")] = !!fullness || !!inset || !!feedbackIcon,
            _b["".concat(prefixCls, "-inset")] = !!inset,
            _b["".concat(prefixCls, "-active")] = active,
            _b["".concat(prefixCls, "-inset-active")] = !!inset && active,
            _b["".concat(prefixCls, "-label-align-").concat(labelAlign)] = true,
            _b["".concat(prefixCls, "-control-align-").concat(wrapperAlign)] = true,
            _b["".concat(prefixCls, "-label-wrap")] = !!labelWrap,
            _b["".concat(prefixCls, "-control-wrap")] = !!wrapperWrap,
            _b["".concat(prefixCls, "-bordered-none")] = bordered === false || !!inset || !!feedbackIcon,
            _b[(_g = props.className) !== null && _g !== void 0 ? _g : ''] = !!props.className,
            _b)), onFocus: function () {
            if (feedbackIcon || inset) {
                setActice(true);
            }
        }, onBlur: function () {
            if (feedbackIcon || inset) {
                setActice(false);
            }
        } }),
        label !== undefined && (React.createElement("div", { className: cls((_c = {},
                _c["".concat(prefixCls, "-label")] = true,
                _c["".concat(prefixCls, "-label-tooltip")] = tooltip && tooltipLayout === 'text',
                _c["".concat(prefixCls, "-item-col-").concat(labelCol)] = enableCol && !!labelCol,
                _c)), style: labelStyle },
            tooltipLayout === 'text' ? (React.createElement(Tooltip, __assign({ position: "top", content: tooltip, getPopupContainer: function () { return popoverContainerRef.current; } }, tooltipProps), labelChildren)) : (labelChildren),
            tooltip && tooltipLayout === 'icon' && (React.createElement("span", { className: cls("".concat(prefixCls, "-label-tooltip")) },
                React.createElement(Tooltip, __assign({ position: "top", content: tooltip, getPopupContainer: function () { return popoverContainerRef.current; } }, tooltipProps),
                    React.createElement(IconQuestionCircle, null)))),
            label && (React.createElement("span", { className: cls("".concat(prefixCls, "-colon")) }, colon ? ':' : '')))),
        React.createElement("div", { className: cls((_d = {},
                _d["".concat(prefixCls, "-control")] = true,
                _d["".concat(prefixCls, "-item-col-").concat(wrapperCol)] = enableCol && !!wrapperCol && label,
                _d)) },
            React.createElement("div", { className: cls("".concat(prefixCls, "-control-content")) },
                addonBefore && (React.createElement("div", { className: cls("".concat(prefixCls, "-addon-before")) }, addonBefore)),
                React.createElement("div", { style: wrapperStyle, className: cls((_e = {},
                        _e["".concat(prefixCls, "-control-content-component")] = true,
                        _e["".concat(prefixCls, "-control-content-component-has-feedback-icon")] = !!feedbackIcon,
                        _e)) },
                    React.createElement(FormLayoutShallowContext.Provider, { value: reduce(shallowFormLayout, function (buf, _, key) {
                            if (key === 'size') {
                                buf.size = size;
                            }
                            else {
                                buf[key] = undefined;
                            }
                            return buf;
                        }, {
                            size: size,
                        }) }, formatChildren),
                    feedbackIcon && (React.createElement("div", { className: cls("".concat(prefixCls, "-feedback-icon")) }, feedbackIcon))),
                addonAfter && (React.createElement("div", { className: cls("".concat(prefixCls, "-addon-after")) }, addonAfter))),
            !!feedbackText &&
                feedbackLayout !== 'popover' &&
                feedbackLayout !== 'none' && (React.createElement("div", { className: cls((_f = {},
                    _f["".concat(prefixCls, "-").concat(feedbackStatus, "-help")] = !!feedbackStatus,
                    _f["".concat(prefixCls, "-help")] = true,
                    _f["".concat(prefixCls, "-help-enter")] = true,
                    _f["".concat(prefixCls, "-help-enter-active")] = true,
                    _f)) }, feedbackText)),
            extra && React.createElement("div", { className: cls("".concat(prefixCls, "-extra")) }, extra))));
};
export var FormItem = Object.assign(connect(BaseItem, mapProps(function (props, field) {
    if (isVoidField(field))
        return {
            label: field.title || props.label,
            asterisk: props.asterisk,
            extra: props.extra || field.description,
        };
    if (!field)
        return props;
    var takeFeedbackStatus = function () {
        if (field.validating)
            return 'pending';
        return field.decoratorProps.feedbackStatus || field.validateStatus;
    };
    var takeMessage = function () {
        var split = function (messages) {
            return messages.reduce(function (buf, text, index) {
                if (!text)
                    return buf;
                return index < messages.length - 1
                    ? buf.concat([text, ', '])
                    : buf.concat([text]);
            }, []);
        };
        if (field.validating)
            return;
        if (props.feedbackText)
            return props.feedbackText;
        if (field.selfErrors.length)
            return split(field.selfErrors);
        if (field.selfWarnings.length)
            return split(field.selfWarnings);
        if (field.selfSuccesses.length)
            return split(field.selfSuccesses);
    };
    var takeAsterisk = function () {
        if (field.required && field.pattern !== 'readPretty') {
            return true;
        }
        if ('asterisk' in props) {
            return props.asterisk;
        }
        return false;
    };
    return {
        label: props.label || field.title,
        feedbackStatus: takeFeedbackStatus(),
        feedbackText: takeMessage(),
        asterisk: takeAsterisk(),
        extra: props.extra || field.description,
    };
})), {
    BaseItem: BaseItem,
});
export default FormItem;
//# sourceMappingURL=index.js.map