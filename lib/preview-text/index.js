"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewText = void 0;
var react_1 = __importStar(require("react"));
var shared_1 = require("@formily/shared");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var classnames_1 = __importDefault(require("classnames"));
require("./index.scss");
var __builtins__1 = require("../__builtins__");
var PlaceholderContext = (0, react_1.createContext)('N/A');
var Placeholder = PlaceholderContext.Provider;
var usePlaceholder = function (value) {
    var placeholder = (0, react_1.useContext)(PlaceholderContext) || 'N/A';
    return (0, shared_1.isValid)(value) && value !== '' ? value : placeholder;
};
var Input = function (props) {
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    return (react_1.default.createElement(web_react_1.Space, { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style },
        props.addBefore,
        props.prefix,
        usePlaceholder(props.value),
        props.suffix,
        props.addAfter));
};
var Select = (0, react_2.observer)(function (props) {
    var _a;
    var field = (0, react_2.useField)();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var dataSource = ((_a = field === null || field === void 0 ? void 0 : field.dataSource) === null || _a === void 0 ? void 0 : _a.length) ? field.dataSource : [];
    var placeholder = usePlaceholder();
    var getSelected = function () {
        var value = props.value, labelInValue = props.labelInValue;
        if (props.mode == 'multiple') {
            return (0, shared_1.isArr)(value)
                ? value.map(function (val) { return (labelInValue ? val : { label: val, value: val }); })
                : [];
        }
        else {
            return labelInValue && (0, shared_1.isPlainObj)(value)
                ? [value]
                : // ??????value?????????0?????????
                    value !== undefined && value !== null
                        ? [{ label: value, value: value }]
                        : [];
        }
    };
    var getLabels = function () {
        var selected = getSelected();
        if (!selected.length)
            return react_1.default.createElement(web_react_1.Tag, null, placeholder);
        return selected.map(function (_a, key) {
            var _b;
            var value = _a.value, label = _a.label;
            var text = ((_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.find(function (item) { return item.value === value; })) === null || _b === void 0 ? void 0 : _b.label) || label;
            return react_1.default.createElement(web_react_1.Tag, { key: key }, text || placeholder);
        });
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style },
        react_1.default.createElement(web_react_1.Space, null, getLabels())));
});
var TreeSelect = (0, react_2.observer)(function (props) {
    var _a;
    var field = (0, react_2.useField)();
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var dataSource = ((_a = field === null || field === void 0 ? void 0 : field.dataSource) === null || _a === void 0 ? void 0 : _a.length) ? field.dataSource : [];
    var getSelected = function () {
        var value = props.value;
        if (props.multiple) {
            return (0, shared_1.isArr)(value)
                ? value.map(function (val) { return ({ label: val, value: val }); })
                : [];
        }
        else {
            return value ? [{ label: value, value: value }] : [];
        }
    };
    var findLabel = function (value, dataSource) {
        for (var i = 0; i < (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length); i++) {
            var item = dataSource[i];
            if ((item === null || item === void 0 ? void 0 : item.value) === value) {
                return item === null || item === void 0 ? void 0 : item.label;
            }
            else {
                var childLabel = findLabel(value, item === null || item === void 0 ? void 0 : item.children);
                if (childLabel)
                    return childLabel;
            }
        }
    };
    var getLabels = function () {
        var selected = getSelected();
        if (!(selected === null || selected === void 0 ? void 0 : selected.length))
            return react_1.default.createElement(web_react_1.Tag, null, placeholder);
        return selected.map(function (_a, key) {
            var value = _a.value, label = _a.label;
            return (react_1.default.createElement(web_react_1.Tag, { key: key }, findLabel(value, dataSource) || label || placeholder));
        });
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, getLabels()));
});
var Cascader = (0, react_2.observer)(function (props) {
    var _a;
    var field = (0, react_2.useField)();
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var dataSource = ((_a = field === null || field === void 0 ? void 0 : field.dataSource) === null || _a === void 0 ? void 0 : _a.length) ? field.dataSource : [];
    var getSelected = function () {
        return (0, shared_1.isArr)(props.value) ? props.value : [];
    };
    var findLabel = function (value, dataSource) {
        for (var i = 0; i < (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length); i++) {
            var item = dataSource[i];
            if ((item === null || item === void 0 ? void 0 : item.value) === value) {
                return item === null || item === void 0 ? void 0 : item.label;
            }
            else {
                var childLabel = findLabel(value, item === null || item === void 0 ? void 0 : item.children);
                if (childLabel)
                    return childLabel;
            }
        }
    };
    var getLabels = function () {
        var selected = getSelected();
        if (!(selected === null || selected === void 0 ? void 0 : selected.length)) {
            return placeholder;
        }
        return selected
            .map(function (value) {
            return findLabel(value, dataSource) || placeholder;
        })
            .join('/');
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, getLabels()));
});
var DatePicker = function (props) {
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var getLabels = function () {
        var labels = (0, __builtins__1.formatMomentValue)(props.value, props.format, placeholder);
        return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className) }, getLabels());
};
var DateRangePicker = function (props) {
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var getLabels = function () {
        var labels = (0, __builtins__1.formatMomentValue)(props.value, props.format, placeholder);
        return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, getLabels()));
};
var TimePicker = function (props) {
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var getLabels = function () {
        var labels = (0, __builtins__1.formatMomentValue)(props.value, props.format, placeholder);
        return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, getLabels()));
};
var TimeRangePicker = function (props) {
    var placeholder = usePlaceholder();
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    var getLabels = function () {
        var labels = (0, __builtins__1.formatMomentValue)(props.value, props.format, placeholder);
        return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, getLabels()));
};
var Text = function (props) {
    var prefixCls = (0, __builtins__1.usePrefixCls)('text');
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, props.className), style: props.style }, usePlaceholder(props.value)));
};
Text.Input = Input;
Text.Select = Select;
Text.TreeSelect = TreeSelect;
Text.Cascader = Cascader;
Text.DatePicker = DatePicker;
Text.DateRangePicker = DateRangePicker;
Text.TimePicker = TimePicker;
Text.TimeRangePicker = TimeRangePicker;
Text.Placeholder = Placeholder;
Text.usePlaceholder = usePlaceholder;
exports.PreviewText = Text;
exports.default = exports.PreviewText;
//# sourceMappingURL=index.js.map