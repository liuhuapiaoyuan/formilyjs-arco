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
exports.Select = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var icon_1 = require("@arco-design/web-react/icon");
var preview_text_1 = require("../preview-text");
exports.Select = (0, react_2.connect)(web_react_1.Select, (0, react_2.mapProps)({
    loading: true,
    dataSource: "options",
}, function (props, field) {
    return __assign(__assign({}, props), { suffix: (field === null || field === void 0 ? void 0 : field["loading"]) || (field === null || field === void 0 ? void 0 : field["validating"]) ? (react_1.default.createElement(icon_1.IconLoading, null)) : (props.suffix) });
}), (0, react_2.mapReadPretty)(preview_text_1.PreviewText.Select));
exports.default = exports.Select;
//# sourceMappingURL=index.js.map