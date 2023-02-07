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
import React from "react";
import { connect, mapReadPretty, mapProps } from "@formily/react";
import { TreeSelect as ArcoTreeSelect } from "@arco-design/web-react";
import { PreviewText } from "../preview-text";
import { IconLoading } from "@arco-design/web-react/icon";
function convertTreeData(list) {
    return list.map(function (z) {
        var _a;
        var result = __assign(__assign({}, z), { title: (_a = z.title) !== null && _a !== void 0 ? _a : z.label });
        if (Array.isArray(z.children)) {
            result.children = convertTreeData(z.children);
        }
        return result;
    });
}
//treeData  label
export var TreeSelect = connect(ArcoTreeSelect, mapProps(function (props, field) {
    var _a = field.dataSource, dataSource = _a === void 0 ? [] : _a;
    return __assign(__assign({}, props), { treeData: convertTreeData(dataSource), suffixIcon: (field === null || field === void 0 ? void 0 : field["loading"]) || (field === null || field === void 0 ? void 0 : field["validating"]) ? (React.createElement(IconLoading, null)) : (props === null || props === void 0 ? void 0 : props["arrowIcon"]) });
}), mapReadPretty(PreviewText.TreeSelect));
export default TreeSelect;
//# sourceMappingURL=index.js.map