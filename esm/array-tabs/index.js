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
import React, { Fragment, useState } from 'react';
import { Tabs, Badge } from '@arco-design/web-react';
import { useField, observer, useFieldSchema, RecursionField, } from '@formily/react';
import cls from 'classnames';
import './index.scss';
import { usePrefixCls } from '../__builtins__';
var TabPane = Tabs.TabPane;
var FeedbackBadge = observer(function (props) {
    var field = useField();
    var tab = "".concat(field.title || 'Untitled', " ").concat(props.index + 1);
    var errors = field.errors.filter(function (error) {
        return error.address.includes("".concat(field.address, ".").concat(props.index));
    });
    if (errors.length) {
        return (React.createElement(Badge, { className: "errors-badge", count: errors.length, color: "danger" }, tab));
    }
    return React.createElement(Fragment, null, tab);
});
export var ArrayTabs = observer(function (props) {
    var field = useField();
    var schema = useFieldSchema();
    var prefix = usePrefixCls('tabs');
    var _a = __read(useState('tab-0'), 2), activeKey = _a[0], setActiveKey = _a[1];
    var value = Array.isArray(field.value) ? field.value : [];
    var dataSource = (value === null || value === void 0 ? void 0 : value.length) ? value : [{}];
    var onEdit = function (targetKey, type) {
        var _a, _b;
        if (type == 'add') {
            var id = dataSource.length;
            if ((_a = field === null || field === void 0 ? void 0 : field.value) === null || _a === void 0 ? void 0 : _a.length) {
                field.push(null);
            }
            else {
                field.push(null, null);
            }
            setActiveKey("tab-".concat(id));
        }
        else if (type == 'remove') {
            var index = Number((_b = targetKey.match(/-(\d+)/)) === null || _b === void 0 ? void 0 : _b[1]);
            if (index - 1 > -1) {
                setActiveKey("tab-".concat(index - 1));
            }
            field.remove(index);
        }
    };
    return (React.createElement(Tabs, __assign({}, props, { className: cls(prefix, props.className), activeTab: activeKey, onChange: function (key) {
            var _a;
            // 获取当前tab的index eg:tab-1=>1
            var index = Number((_a = key.match(/-(\d+)/)) === null || _a === void 0 ? void 0 : _a[1]);
            if (dataSource.length !== index) {
                setActiveKey(key);
            }
        }, type: "card", onAddTab: onEdit.bind(null, null, 'add'), 
        /*   extra={
          <Button
            icon={<IconPlus />}
            className={cls(`${prefix}-addition`)}
            onClick={onEdit.bind(null, null, 'add')}
          />
        } */
        editable: true, onDeleteTab: function (key) { return onEdit(key, 'remove'); } }), dataSource === null || dataSource === void 0 ? void 0 : dataSource.map(function (_, index) {
        var items = Array.isArray(schema.items)
            ? schema.items[index]
            : schema.items;
        var key = "tab-".concat(index);
        return (React.createElement(TabPane, { key: key, closable: index !== 0, title: React.createElement(FeedbackBadge, { index: index }) },
            React.createElement(RecursionField, { schema: items, name: index })));
    })));
});
export default ArrayTabs;
//# sourceMappingURL=index.js.map