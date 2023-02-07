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
import React, { createContext, useContext } from 'react';
import { Button } from '@arco-design/web-react';
import { IconPlus, IconDelete, IconMenu, IconCaretDown, IconCaretUp, } from '@arco-design/web-react/icon';
import { useField, useFieldSchema } from '@formily/react';
import { isValid } from '@formily/shared';
import { SortableHandle } from 'react-sortable-hoc';
import cls from 'classnames';
import './index.scss';
import { usePrefixCls } from '../__builtins__';
var ArrayBaseContext = createContext(null);
var ItemContext = createContext(null);
var useArray = function () { return useContext(ArrayBaseContext); };
var useIndex = function (index) {
    var ctx = useContext(ItemContext);
    return ctx ? ctx.index : index !== null && index !== void 0 ? index : 0;
};
var useRecord = function (record) {
    var ctx = useContext(ItemContext);
    return ctx ? ctx.record : record;
};
var getDefaultValue = function (defaultValue, schema) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (isValid(defaultValue))
        return defaultValue;
    if (Array.isArray(schema === null || schema === void 0 ? void 0 : schema.items))
        return getDefaultValue(defaultValue, schema.items[0]);
    if (((_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.type) === 'array')
        return [];
    if (((_b = schema === null || schema === void 0 ? void 0 : schema.items) === null || _b === void 0 ? void 0 : _b.type) === 'boolean')
        return true;
    if (((_c = schema === null || schema === void 0 ? void 0 : schema.items) === null || _c === void 0 ? void 0 : _c.type) === 'date')
        return '';
    if (((_d = schema === null || schema === void 0 ? void 0 : schema.items) === null || _d === void 0 ? void 0 : _d.type) === 'datetime')
        return '';
    if (((_e = schema === null || schema === void 0 ? void 0 : schema.items) === null || _e === void 0 ? void 0 : _e.type) === 'number')
        return 0;
    if (((_f = schema === null || schema === void 0 ? void 0 : schema.items) === null || _f === void 0 ? void 0 : _f.type) === 'object')
        return {};
    if (((_g = schema === null || schema === void 0 ? void 0 : schema.items) === null || _g === void 0 ? void 0 : _g.type) === 'string')
        return '';
    return null;
};
export var ArrayBase = function (props) {
    var field = useField();
    var schema = useFieldSchema();
    return (React.createElement(ArrayBaseContext.Provider, { value: { field: field, schema: schema, props: props } }, props.children));
};
ArrayBase.Item = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(ItemContext.Provider, { value: props }, children));
};
var SortHandle = SortableHandle(function (props) {
    var prefixCls = usePrefixCls('array-base');
    return (React.createElement(IconMenu, __assign({}, props, { className: cls("".concat(prefixCls, "-sort-handle"), props.className), style: __assign({}, props.style) })));
});
ArrayBase.SortHandle = function (props) {
    var _a;
    var array = useArray();
    if (!array)
        return null;
    if (((_a = array.field) === null || _a === void 0 ? void 0 : _a.pattern) !== 'editable')
        return null;
    return React.createElement(SortHandle, __assign({}, props));
};
var Index = function (props) {
    var _a;
    var renderIndex = props.renderIndex;
    var index = useIndex();
    var prefixCls = usePrefixCls('array-base');
    return (React.createElement("span", __assign({}, props, { className: "".concat(prefixCls, "-index") }), (_a = renderIndex === null || renderIndex === void 0 ? void 0 : renderIndex(index)) !== null && _a !== void 0 ? _a : "#".concat(index + 1, ".")));
};
ArrayBase.Index = Index;
var Addition = function (props) {
    var _a, _b, _c;
    var self = useField();
    var array = useArray();
    var prefixCls = usePrefixCls('array-base');
    if (!array)
        return null;
    if (((_a = array === null || array === void 0 ? void 0 : array.field) === null || _a === void 0 ? void 0 : _a.pattern) !== 'editable' &&
        ((_b = array === null || array === void 0 ? void 0 : array.field) === null || _b === void 0 ? void 0 : _b.pattern) !== 'disabled') {
        return null;
    }
    return (React.createElement(Button, __assign({ long: true }, props, { disabled: (_c = array === null || array === void 0 ? void 0 : array.field) === null || _c === void 0 ? void 0 : _c.disabled, className: cls("".concat(prefixCls, "-addition"), props.className), onClick: function (e) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
                return;
            var defaultValue = getDefaultValue(props.defaultValue, array.schema);
            if (props.method === 'unshift') {
                (_b = array === null || array === void 0 ? void 0 : array.field) === null || _b === void 0 ? void 0 : _b.unshift(defaultValue);
                (_d = (_c = array.props) === null || _c === void 0 ? void 0 : _c.onAdd) === null || _d === void 0 ? void 0 : _d.call(_c, 0);
            }
            else {
                (_f = (_e = array === null || array === void 0 ? void 0 : array.field) === null || _e === void 0 ? void 0 : _e.push) === null || _f === void 0 ? void 0 : _f.call(_e, defaultValue);
                (_h = (_g = array.props) === null || _g === void 0 ? void 0 : _g.onAdd) === null || _h === void 0 ? void 0 : _h.call(_g, ((_k = (_j = array === null || array === void 0 ? void 0 : array.field) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.length) - 1);
            }
            (_l = props.onClick) === null || _l === void 0 ? void 0 : _l.call(props, e);
        }, icon: React.createElement(IconPlus, null) }), self.title || props.title));
};
ArrayBase.Addition = Addition;
ArrayBase.Remove = React.forwardRef(function (props, ref) {
    var _a;
    var index = useIndex();
    var array = useArray();
    var prefixCls = usePrefixCls('array-base');
    if (!array)
        return null;
    if (((_a = array === null || array === void 0 ? void 0 : array.field) === null || _a === void 0 ? void 0 : _a.pattern) !== 'editable')
        return null;
    return (React.createElement(IconDelete, __assign({}, props, { className: cls("".concat(prefixCls, "-remove"), props.className), ref: ref, onClick: function (e) {
            var _a, _b, _c, _d, _e;
            if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
                return;
            e.stopPropagation();
            (_c = (_b = array.field) === null || _b === void 0 ? void 0 : _b.remove) === null || _c === void 0 ? void 0 : _c.call(_b, index);
            (_e = (_d = array.props) === null || _d === void 0 ? void 0 : _d.onRemove) === null || _e === void 0 ? void 0 : _e.call(_d, index);
            if (props.onClick) {
                props.onClick(e);
            }
        } })));
});
ArrayBase.MoveDown = React.forwardRef(function (props, ref) {
    var _a;
    var index = useIndex(props.index);
    var array = useArray();
    var prefixCls = usePrefixCls('array-base-move-down');
    if (((_a = array === null || array === void 0 ? void 0 : array.field) === null || _a === void 0 ? void 0 : _a.pattern) !== 'editable')
        return null;
    return (React.createElement(IconCaretDown, __assign({}, props, { className: cls(prefixCls, props.className), ref: ref, onClick: function (e) {
            var _a, _b, _c, _d, _e;
            if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
                return;
            e.stopPropagation();
            (_c = (_b = array.field) === null || _b === void 0 ? void 0 : _b.moveDown) === null || _c === void 0 ? void 0 : _c.call(_b, index);
            (_e = (_d = array.props) === null || _d === void 0 ? void 0 : _d.onMoveDown) === null || _e === void 0 ? void 0 : _e.call(_d, index);
            if (props.onClick) {
                props.onClick(e);
            }
        } })));
});
ArrayBase.MoveUp = React.forwardRef(function (props, ref) {
    var _a;
    var index = useIndex(props.index);
    var array = useArray();
    var prefixCls = usePrefixCls('array-base-move-up');
    if (((_a = array === null || array === void 0 ? void 0 : array.field) === null || _a === void 0 ? void 0 : _a.pattern) !== 'editable')
        return null;
    return (React.createElement(IconCaretUp, __assign({}, props, { className: cls(prefixCls, props.className), ref: ref, onClick: function (e) {
            var _a, _b, _c, _d;
            if ((_a = array.props) === null || _a === void 0 ? void 0 : _a.disabled)
                return;
            e.stopPropagation();
            (_b = array === null || array === void 0 ? void 0 : array.field) === null || _b === void 0 ? void 0 : _b.moveUp(index);
            (_d = (_c = array === null || array === void 0 ? void 0 : array.props) === null || _c === void 0 ? void 0 : _c.onMoveUp) === null || _d === void 0 ? void 0 : _d.call(_c, index);
            if (props.onClick) {
                props.onClick(e);
            }
        } })));
});
ArrayBase.useArray = useArray;
ArrayBase.useIndex = useIndex;
ArrayBase.useRecord = useRecord;
ArrayBase.mixin = function (target) {
    target.Index = ArrayBase.Index;
    target.SortHandle = ArrayBase.SortHandle;
    target.Addition = ArrayBase.Addition;
    target.Remove = ArrayBase.Remove;
    target.MoveDown = ArrayBase.MoveDown;
    target.MoveUp = ArrayBase.MoveUp;
    target.useArray = ArrayBase.useArray;
    target.useIndex = ArrayBase.useIndex;
    target.useRecord = ArrayBase.useRecord;
    return target;
};
export default ArrayBase;
//# sourceMappingURL=index.js.map