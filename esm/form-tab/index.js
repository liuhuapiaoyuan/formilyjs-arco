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
import React, { Fragment, useMemo, useRef } from 'react';
import { Tabs, Badge } from '@arco-design/web-react';
import { model } from '@formily/reactive';
import { useField, observer, useFieldSchema, RecursionField, } from '@formily/react';
import cls from 'classnames';
import { usePrefixCls } from '../__builtins__';
var TabPaneArco = Tabs.TabPane;
var useTabs = function () {
    var tabsField = useField();
    var schema = useFieldSchema();
    var tabs = [];
    schema.mapProperties(function (schema, name) {
        var _a, _b;
        var field = tabsField.query(tabsField.address.concat(name)).take();
        if ((field === null || field === void 0 ? void 0 : field.display) === 'none' || (field === null || field === void 0 ? void 0 : field.display) === 'hidden')
            return;
        if (((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('TabPane')) > -1) {
            tabs.push({
                name: name,
                props: __assign({ itemKey: ((_b = schema === null || schema === void 0 ? void 0 : schema['x-component-props']) === null || _b === void 0 ? void 0 : _b.itemKey) || name }, schema === null || schema === void 0 ? void 0 : schema['x-component-props']),
                schema: schema,
            });
        }
    });
    return tabs;
};
var createFormTab = function (defaultActiveKey, activeKey) {
    var formTab = model({
        defaultActiveKey: defaultActiveKey,
        activeKey: activeKey,
        setActiveKey: function (key) {
            formTab.activeKey = key;
        },
    });
    return formTab;
};
export var FormTab = observer(function (_a) {
    var _b;
    var formTab = _a.formTab, props = __rest(_a, ["formTab"]);
    var field = useField();
    var tabs = useTabs();
    var tabsRef = useRef(tabs);
    var propsRef = useRef(props);
    var _formTab = useMemo(function () {
        var _a, _b, _c, _d;
        return (formTab !== null && formTab !== void 0 ? formTab : createFormTab((_a = propsRef.current.defaultActiveTab) !== null && _a !== void 0 ? _a : (_d = (_c = (_b = tabsRef.current) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.itemKey, propsRef.current.activeTab));
    }, [formTab]);
    var prefixCls = usePrefixCls('formily-tab');
    var badgedTab = function (key, props) {
        var _a, _b;
        var errors = field.form.queryFeedbacks({
            type: 'error',
            address: "".concat(field.address.concat(key), ".*"),
        });
        if (errors.length) {
            return (React.createElement(Badge, { className: "errors-badge", count: errors.length }, (_a = props.tab) !== null && _a !== void 0 ? _a : props.title));
        }
        return (_b = props.tab) !== null && _b !== void 0 ? _b : props.title;
    };
    return (React.createElement(Tabs, __assign({}, props, { type: "card-gutter", className: cls(prefixCls, props.className), defaultActiveTab: _formTab === null || _formTab === void 0 ? void 0 : _formTab.defaultActiveKey, activeTab: (_b = _formTab === null || _formTab === void 0 ? void 0 : _formTab.activeKey) !== null && _b !== void 0 ? _b : _formTab === null || _formTab === void 0 ? void 0 : _formTab.defaultActiveKey, onChange: function (key) {
            var _a, _b;
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
            (_b = _formTab === null || _formTab === void 0 ? void 0 : _formTab.setActiveKey) === null || _b === void 0 ? void 0 : _b.call(_formTab, key);
        } }), tabs.map(function (_a, key) {
        var props = _a.props, schema = _a.schema, name = _a.name;
        var itemKey = props.itemKey, reset = __rest(props, ["itemKey"]);
        return (React.createElement(TabPaneArco, __assign({ key: "".concat(itemKey !== null && itemKey !== void 0 ? itemKey : key) }, reset, { title: badgedTab(name, props) }),
            React.createElement(RecursionField, { schema: schema, name: name })));
    })));
});
var TabPane = function (_a) {
    var children = _a.children;
    return React.createElement(Fragment, null, children);
};
FormTab.TabPane = TabPane;
FormTab.createFormTab = createFormTab;
export default FormTab;
//# sourceMappingURL=index.js.map