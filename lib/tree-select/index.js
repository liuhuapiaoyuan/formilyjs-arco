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
exports.TreeSelect = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var preview_text_1 = require("../preview-text");
var icon_1 = require("@arco-design/web-react/icon");
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
exports.TreeSelect = (0, react_2.connect)(web_react_1.TreeSelect, (0, react_2.mapProps)(function (props, field) {
    var _a = field.dataSource, dataSource = _a === void 0 ? [] : _a;
    return __assign(__assign({}, props), { treeData: convertTreeData(dataSource), suffixIcon: (field === null || field === void 0 ? void 0 : field["loading"]) || (field === null || field === void 0 ? void 0 : field["validating"]) ? (react_1.default.createElement(icon_1.IconLoading, null)) : (props === null || props === void 0 ? void 0 : props["arrowIcon"]) });
}), (0, react_2.mapReadPretty)(preview_text_1.PreviewText.TreeSelect));
exports.default = exports.TreeSelect;
//# sourceMappingURL=index.js.map