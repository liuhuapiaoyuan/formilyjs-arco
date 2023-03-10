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
exports.FormCollapse = void 0;
var react_1 = __importStar(require("react"));
var web_react_1 = require("@arco-design/web-react");
var reactive_1 = require("@formily/reactive");
var react_2 = require("@formily/react");
var classnames_1 = __importDefault(require("classnames"));
var __builtins__1 = require("../__builtins__");
var shared_1 = require("@formily/shared");
var usePanels = function () {
    var collapseField = (0, react_2.useField)();
    var schema = (0, react_2.useFieldSchema)();
    var panels = [];
    schema.mapProperties(function (schema, name) {
        var _a, _b, _c;
        var field = collapseField.query(collapseField.address.concat(name)).take();
        if ((field === null || field === void 0 ? void 0 : field.display) === 'none' || (field === null || field === void 0 ? void 0 : field.display) === 'hidden') {
            return;
        }
        if (((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('CollapsePanel')) > -1) {
            panels.push({
                name: name,
                props: __assign(__assign({}, schema === null || schema === void 0 ? void 0 : schema['x-component-props']), { key: ((_b = schema === null || schema === void 0 ? void 0 : schema['x-component-props']) === null || _b === void 0 ? void 0 : _b.key) || name, name: ((_c = schema === null || schema === void 0 ? void 0 : schema['x-component-props']) === null || _c === void 0 ? void 0 : _c.name) || name }),
                schema: schema,
            });
        }
    });
    return panels;
};
var createFormCollapse = function (defaultActiveKeys) {
    var formCollapse = (0, reactive_1.model)({
        activeKeys: defaultActiveKeys || [],
        setActiveKeys: function (keys) {
            formCollapse.activeKeys = keys;
        },
        hasActiveKey: function (key) {
            if (Array.isArray(formCollapse.activeKeys)) {
                if (formCollapse.activeKeys.includes(key)) {
                    return true;
                }
            }
            else if (formCollapse.activeKeys == key) {
                return true;
            }
            return false;
        },
        addActiveKey: function (key) {
            if (formCollapse.hasActiveKey(key)) {
                return;
            }
            formCollapse.activeKeys = (0, shared_1.toArr)(formCollapse.activeKeys).concat(key);
        },
        removeActiveKey: function (key) {
            if (Array.isArray(formCollapse.activeKeys)) {
                formCollapse.activeKeys = formCollapse.activeKeys.filter(function (item) { return item != key; });
            }
            else {
                formCollapse.activeKeys = '';
            }
        },
        toggleActiveKey: function (key) {
            if (formCollapse.hasActiveKey(key)) {
                formCollapse.removeActiveKey(key);
            }
            else {
                formCollapse.addActiveKey(key);
            }
        },
    });
    return formCollapse;
};
exports.FormCollapse = (0, react_2.observer)(function (_a) {
    var formCollapse = _a.formCollapse, props = __rest(_a, ["formCollapse"]);
    var field = (0, react_2.useField)();
    var panels = usePanels();
    var prefixCls = (0, __builtins__1.usePrefixCls)('collapse');
    var _formCollapse = (0, react_1.useMemo)(function () { return formCollapse !== null && formCollapse !== void 0 ? formCollapse : createFormCollapse(props.defaultActiveKey); }, [formCollapse, props.defaultActiveKey]);
    var activeKey = props.activeKey || (_formCollapse === null || _formCollapse === void 0 ? void 0 : _formCollapse.activeKeys);
    var badgedHeader = function (key, props) {
        var errors = field.form.queryFeedbacks({
            type: 'error',
            address: "".concat(field.address.concat(key), ".*"),
        });
        if (errors.length) {
            return (react_1.default.createElement(web_react_1.Badge, { className: "errors-badge", count: errors.length }, props.header));
        }
        return props.header;
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, JSON.stringify(activeKey)),
        react_1.default.createElement(web_react_1.Collapse, __assign({}, props, { className: (0, classnames_1.default)(prefixCls, props.className), activeKey: "".concat(activeKey), onChange: function (key, keys, e) {
                var _a, _b;
                (_a = props === null || props === void 0 ? void 0 : props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, key, keys, e);
                (_b = _formCollapse === null || _formCollapse === void 0 ? void 0 : _formCollapse.setActiveKeys) === null || _b === void 0 ? void 0 : _b.call(_formCollapse, key);
            } }), panels.map(function (_a, index) {
            var props = _a.props, schema = _a.schema, name = _a.name;
            return (react_1.default.createElement(web_react_1.Collapse.Item, __assign({ key: index }, props, { header: badgedHeader(name, props), destroyOnHide: false }),
                react_1.default.createElement(react_2.RecursionField, { schema: schema, name: name })));
        }))));
});
var CollapsePanel = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.Fragment, null, children));
};
exports.FormCollapse.CollapsePanel = CollapsePanel;
exports.FormCollapse.createFormCollapse = createFormCollapse;
exports.default = exports.FormCollapse;
//# sourceMappingURL=index.js.map