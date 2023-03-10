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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayItems = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@formily/react");
var classnames_1 = __importDefault(require("classnames"));
var react_sortable_hoc_1 = require("react-sortable-hoc");
var __builtins__1 = require("../__builtins__");
var array_base_1 = require("../array-base");
require("./index.scss");
var SortableItem = (0, react_sortable_hoc_1.SortableElement)(function (props) {
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-items');
    return (react_1.default.createElement("div", __assign({}, props, { className: (0, classnames_1.default)("".concat(prefixCls, "-item"), props.className) }), props.children));
});
var SortableList = (0, react_sortable_hoc_1.SortableContainer)(function (props) {
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-items');
    return (react_1.default.createElement("div", __assign({}, props, { className: (0, classnames_1.default)("".concat(prefixCls, "-list"), props.className) }), props.children));
});
var isAdditionComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1;
};
var useAddition = function () {
    var schema = (0, react_2.useFieldSchema)();
    return schema.reduceProperties(function (addition, schema, key) {
        if (isAdditionComponent(schema)) {
            return react_1.default.createElement(react_2.RecursionField, { schema: schema, name: key });
        }
        return addition;
    }, null);
};
exports.ArrayItems = (0, react_2.observer)(function (props) {
    var field = (0, react_2.useField)();
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-items');
    var schema = (0, react_2.useFieldSchema)();
    var addition = useAddition();
    var dataSource = Array.isArray(field.value) ? field.value : [];
    if (!schema)
        throw new Error('can not found schema object');
    return (react_1.default.createElement(array_base_1.ArrayBase, null,
        react_1.default.createElement("div", __assign({}, props, { onChange: function () { }, className: (0, classnames_1.default)(prefixCls, props.className) }),
            react_1.default.createElement(SortableList, { useDragHandle: true, lockAxis: "y", helperClass: "".concat(prefixCls, "-sort-helper"), onSortEnd: function (_a) {
                    var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
                    field.move(oldIndex, newIndex);
                } }, dataSource === null || dataSource === void 0 ? void 0 : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items;
                return (react_1.default.createElement(array_base_1.ArrayBase.Item, { key: index, index: index, record: item },
                    react_1.default.createElement(SortableItem, { key: "item-".concat(index), index: index },
                        react_1.default.createElement("div", { className: "".concat(prefixCls, "-item-inner") },
                            react_1.default.createElement(react_2.RecursionField, { schema: items, name: index })))));
            })),
            addition)));
});
exports.ArrayItems.displayName = 'ArrayItems';
exports.ArrayItems.Item = function (props) {
    var prefixCls = (0, __builtins__1.usePrefixCls)('formily-array-items');
    return (react_1.default.createElement("div", __assign({}, props, { onChange: function () { }, className: (0, classnames_1.default)("".concat(prefixCls, "-").concat(props.type || 'card'), props.className) }), props.children));
};
array_base_1.ArrayBase.mixin(exports.ArrayItems);
exports.default = exports.ArrayItems;
//# sourceMappingURL=index.js.map