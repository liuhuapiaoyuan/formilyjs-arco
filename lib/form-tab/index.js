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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTab = void 0;
var react_1 = __importStar(require("react"));
var web_react_1 = require("@arco-design/web-react");
var reactive_1 = require("@formily/reactive");
var react_2 = require("@formily/react");
var classnames_1 = __importDefault(require("classnames"));
var __builtins__1 = require("../__builtins__");
var TabPaneArco = web_react_1.Tabs.TabPane;
var useTabs = function () {
    var tabsField = (0, react_2.useField)();
    var schema = (0, react_2.useFieldSchema)();
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
    var formTab = (0, reactive_1.model)({
        defaultActiveKey: defaultActiveKey,
        activeKey: activeKey,
        setActiveKey: function (key) {
            formTab.activeKey = key;
        },
    });
    return formTab;
};
exports.FormTab = (0, react_2.observer)(function (_a) {
    var _b;
    var formTab = _a.formTab, props = __rest(_a, ["formTab"]);
    var field = (0, react_2.useField)();
    var tabs = useTabs();
    var tabsRef = (0, react_1.useRef)(tabs);
    var propsRef = (0, react_1.useRef)(props);
    var _formTab = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d;
        return (formTab !== null && formTab !== void 0 ? formTab : createFormTab((_a = propsRef.current.defaultActiveTab) !== null && _a !== void 0 ? _a : (_d = (_c = (_b = tabsRef.current) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.itemKey, propsRef.current.activeTab));
    }, [formTab]);
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-tab');
    var badgedTab = function (key, props) {
        var _a, _b;
        var errors = field.form.queryFeedbacks({
            type: 'error',
            address: "".concat(field.address.concat(key), ".*"),
        });
        if (errors.length) {
            return (react_1.default.createElement(web_react_1.Badge, { className: "errors-badge", count: errors.length }, (_a = props.tab) !== null && _a !== void 0 ? _a : props.title));
        }
        return (_b = props.tab) !== null && _b !== void 0 ? _b : props.title;
    };
    return (react_1.default.createElement(web_react_1.Tabs, __assign({}, props, { type: "card-gutter", className: (0, classnames_1.default)(prefixCls, props.className), defaultActiveTab: _formTab === null || _formTab === void 0 ? void 0 : _formTab.defaultActiveKey, activeTab: (_b = _formTab === null || _formTab === void 0 ? void 0 : _formTab.activeKey) !== null && _b !== void 0 ? _b : _formTab === null || _formTab === void 0 ? void 0 : _formTab.defaultActiveKey, onChange: function (key) {
            var _a, _b;
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
            (_b = _formTab === null || _formTab === void 0 ? void 0 : _formTab.setActiveKey) === null || _b === void 0 ? void 0 : _b.call(_formTab, key);
        } }), tabs.map(function (_a, key) {
        var props = _a.props, schema = _a.schema, name = _a.name;
        var itemKey = props.itemKey, reset = __rest(props, ["itemKey"]);
        return (react_1.default.createElement(TabPaneArco, __assign({ key: "".concat(itemKey !== null && itemKey !== void 0 ? itemKey : key) }, reset, { title: badgedTab(name, props) }),
            react_1.default.createElement(react_2.RecursionField, { schema: schema, name: name })));
    })));
});
var TabPane = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.Fragment, null, children);
};
exports.FormTab.TabPane = TabPane;
exports.FormTab.createFormTab = createFormTab;
exports.default = exports.FormTab;
//# sourceMappingURL=index.js.map