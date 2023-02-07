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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
exports.DatePicker = (0, react_1.connect)(web_react_1.DatePicker, (0, react_1.mapProps)(function (props) {
    var onChange = props.onChange;
    return __assign(__assign({}, props), { onChange: function (dateStr, date) {
            if (onChange) {
                // 这种方式破坏了原有属性
                onChange(dateStr, date);
            }
        } });
}));
exports.default = exports.DatePicker;
//# sourceMappingURL=index.js.map