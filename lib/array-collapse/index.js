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
exports.ArrayCollapse = void 0;
var react_1 = __importStar(require("react"));
var web_react_1 = require("@arco-design/web-react");
var react_2 = require("@formily/react");
var classnames_1 = __importDefault(require("classnames"));
var array_base_1 = __importDefault(require("../array-base"));
var __builtins__1 = require("../__builtins__");
require("./index.scss");
var isAdditionComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1;
};
var isIndexComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Index')) > -1;
};
var isRemoveComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Remove')) > -1;
};
var isMoveUpComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('MoveUp')) > -1;
};
var isMoveDownComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('MoveDown')) > -1;
};
var isOperationComponent = function (schema) {
    return (isAdditionComponent(schema) ||
        isRemoveComponent(schema) ||
        isMoveDownComponent(schema) ||
        isMoveUpComponent(schema));
};
var range = function (count) { return Array.from({ length: count }).map(function (_, i) { return i; }); };
var takeDefaultActiveKeys = function (dataSourceLength, defaultOpenPanelCount) {
    if (defaultOpenPanelCount === void 0) { defaultOpenPanelCount = Infinity; }
    if (dataSourceLength < defaultOpenPanelCount)
        return range(dataSourceLength);
    return range(defaultOpenPanelCount);
};
var insertActiveKeys = function (activeKeys, index) {
    if (activeKeys.length <= index)
        return activeKeys.concat(index);
    return activeKeys.reduce(function (buf, key) {
        if (key < index)
            return buf.concat(key);
        if (key === index)
            return buf.concat([key, key + 1]);
        return buf.concat(key + 1);
    }, []);
};
exports.ArrayCollapse = (0, react_2.observer)(function (props) {
    var arrayBaseProps = props.arrayBaseProps, respProps = __rest(props, ["arrayBaseProps"]);
    var field = (0, react_2.useField)();
    var dataSource = Array.isArray(field.value) ? field.value : [];
    var _a = __read((0, react_1.useState)(takeDefaultActiveKeys(dataSource.length, respProps.defaultOpenPanelCount)), 2), activeKeys = _a[0], setActiveKeys = _a[1];
    var schema = (0, react_2.useFieldSchema)();
    var prefixCls = (0, __builtins__1.usePrefixCls)('array-collapse', respProps);
    (0, react_1.useEffect)(function () {
        if (!field.modified && dataSource.length) {
            setActiveKeys(takeDefaultActiveKeys(dataSource.length, respProps.defaultOpenPanelCount));
        }
    }, [dataSource.length, field]);
    if (!schema)
        throw new Error('can not found schema object');
    var renderAddition = function () {
        return schema.reduceProperties(function (addition, schema, key) {
            if (isAdditionComponent(schema)) {
                return react_1.default.createElement(react_2.RecursionField, { schema: schema, name: key });
            }
            return addition;
        }, null);
    };
    var renderEmpty = function () {
        if (dataSource.length)
            return;
        return (react_1.default.createElement(web_react_1.Card, { className: (0, classnames_1.default)("".concat(prefixCls, "-item"), respProps.className) },
            react_1.default.createElement(web_react_1.Empty, null)));
    };
    var renderItems = function () {
        return (react_1.default.createElement(web_react_1.Collapse, __assign({}, respProps, { activeKey: activeKeys.map(function (z) { return "".concat(z); }), onChange: function (_key, keys) { return setActiveKeys(keys.map(Number)); }, className: (0, classnames_1.default)("".concat(prefixCls, "-item"), respProps.className) }), dataSource.map(function (item, index) {
            var items = Array.isArray(schema.items)
                ? schema.items[index] || schema.items[0]
                : schema.items;
            var panelProps = field
                .query("".concat(field.address, ".").concat(index))
                .get('componentProps');
            var props = items === null || items === void 0 ? void 0 : items['x-component-props'];
            var extra = (react_1.default.createElement(array_base_1.default.Item, { index: index, record: item },
                react_1.default.createElement(react_2.RecursionField, { schema: items, name: index, filterProperties: function (schema) {
                        if (!isOperationComponent(schema))
                            return false;
                        return true;
                    }, onlyRenderProperties: true }), props === null || props === void 0 ? void 0 :
                props.extra));
            var content = (react_1.default.createElement(react_2.RecursionField, { schema: items, name: index, filterProperties: function (schema) {
                    if (isIndexComponent(schema))
                        return false;
                    if (isOperationComponent(schema))
                        return false;
                    return true;
                } }));
            return (react_1.default.createElement(web_react_1.Collapse.Item, __assign({}, props, panelProps, { key: index, name: index + '', 
                //  header={header()}
                // header 仅为 string 时，extra 才可用
                extra: extra }),
                react_1.default.createElement(array_base_1.default.Item, { index: index, key: index, record: item }, content)));
        })));
    };
    return (react_1.default.createElement(array_base_1.default, __assign({}, arrayBaseProps, { onAdd: function (index) {
            var _a;
            setActiveKeys(insertActiveKeys(activeKeys, index));
            (_a = arrayBaseProps === null || arrayBaseProps === void 0 ? void 0 : arrayBaseProps.onAdd) === null || _a === void 0 ? void 0 : _a.call(arrayBaseProps, index);
        } }),
        renderEmpty(),
        renderItems(),
        renderAddition()));
});
var CollapsePanel = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.Fragment, null, children);
};
CollapsePanel.displayName = 'CollapsePanel';
exports.ArrayCollapse.defaultProps = {
    defaultOpenPanelCount: 5,
};
exports.ArrayCollapse.displayName = 'ArrayCollapse';
exports.ArrayCollapse.CollapsePanel = CollapsePanel;
array_base_1.default.mixin(exports.ArrayCollapse);
exports.default = exports.ArrayCollapse;
//# sourceMappingURL=index.js.map