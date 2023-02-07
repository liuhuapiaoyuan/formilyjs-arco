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
exports.ArrayTabs = void 0;
var react_1 = __importStar(require("react"));
var web_react_1 = require("@arco-design/web-react");
var react_2 = require("@formily/react");
var classnames_1 = __importDefault(require("classnames"));
require("./index.scss");
var __builtins__1 = require("../__builtins__");
var TabPane = web_react_1.Tabs.TabPane;
var FeedbackBadge = (0, react_2.observer)(function (props) {
    var field = (0, react_2.useField)();
    var tab = "".concat(field.title || 'Untitled', " ").concat(props.index + 1);
    var errors = field.errors.filter(function (error) {
        return error.address.includes("".concat(field.address, ".").concat(props.index));
    });
    if (errors.length) {
        return (react_1.default.createElement(web_react_1.Badge, { className: "errors-badge", count: errors.length, color: "danger" }, tab));
    }
    return react_1.default.createElement(react_1.Fragment, null, tab);
});
exports.ArrayTabs = (0, react_2.observer)(function (props) {
    var field = (0, react_2.useField)();
    var schema = (0, react_2.useFieldSchema)();
    var prefix = (0, __builtins__1.usePrefixCls)('tabs');
    var _a = __read((0, react_1.useState)('tab-0'), 2), activeKey = _a[0], setActiveKey = _a[1];
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
    return (react_1.default.createElement(web_react_1.Tabs, __assign({}, props, { className: (0, classnames_1.default)(prefix, props.className), activeTab: activeKey, onChange: function (key) {
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
        return (react_1.default.createElement(TabPane, { key: key, closable: index !== 0, title: react_1.default.createElement(FeedbackBadge, { index: index }) },
            react_1.default.createElement(react_2.RecursionField, { schema: items, name: index })));
    })));
});
exports.default = exports.ArrayTabs;
//# sourceMappingURL=index.js.map