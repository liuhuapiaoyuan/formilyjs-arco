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
import React from 'react';
import { useField, observer, useFieldSchema, RecursionField, } from '@formily/react';
import cls from 'classnames';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { usePrefixCls } from '../__builtins__';
import { ArrayBase } from '../array-base';
import './index.scss';
var SortableItem = SortableElement(function (props) {
    var prefixCls = usePrefixCls('formily-array-items');
    return (React.createElement("div", __assign({}, props, { className: cls("".concat(prefixCls, "-item"), props.className) }), props.children));
});
var SortableList = SortableContainer(function (props) {
    var prefixCls = usePrefixCls('formily-array-items');
    return (React.createElement("div", __assign({}, props, { className: cls("".concat(prefixCls, "-list"), props.className) }), props.children));
});
var isAdditionComponent = function (schema) {
    var _a;
    return ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1;
};
var useAddition = function () {
    var schema = useFieldSchema();
    return schema.reduceProperties(function (addition, schema, key) {
        if (isAdditionComponent(schema)) {
            return React.createElement(RecursionField, { schema: schema, name: key });
        }
        return addition;
    }, null);
};
export var ArrayItems = observer(function (props) {
    var field = useField();
    var prefixCls = usePrefixCls('formily-array-items');
    var schema = useFieldSchema();
    var addition = useAddition();
    var dataSource = Array.isArray(field.value) ? field.value : [];
    if (!schema)
        throw new Error('can not found schema object');
    return (React.createElement(ArrayBase, null,
        React.createElement("div", __assign({}, props, { onChange: function () { }, className: cls(prefixCls, props.className) }),
            React.createElement(SortableList, { useDragHandle: true, lockAxis: "y", helperClass: "".concat(prefixCls, "-sort-helper"), onSortEnd: function (_a) {
                    var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
                    field.move(oldIndex, newIndex);
                } }, dataSource === null || dataSource === void 0 ? void 0 : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items;
                return (React.createElement(ArrayBase.Item, { key: index, index: index, record: item },
                    React.createElement(SortableItem, { key: "item-".concat(index), index: index },
                        React.createElement("div", { className: "".concat(prefixCls, "-item-inner") },
                            React.createElement(RecursionField, { schema: items, name: index })))));
            })),
            addition)));
});
ArrayItems.displayName = 'ArrayItems';
ArrayItems.Item = function (props) {
    var prefixCls = usePrefixCls('formily-array-items');
    return (React.createElement("div", __assign({}, props, { onChange: function () { }, className: cls("".concat(prefixCls, "-").concat(props.type || 'card'), props.className) }), props.children));
};
ArrayBase.mixin(ArrayItems);
export default ArrayItems;
//# sourceMappingURL=index.js.map