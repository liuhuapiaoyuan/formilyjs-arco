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
exports.TimePicker = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
exports.TimePicker = (0, react_1.connect)(web_react_1.TimePicker, (0, react_1.mapProps)(function (props) {
    var onChange = props.onChange;
    return __assign(__assign({}, props), { onChange: function (time, timeStr) {
            if (onChange) {
                onChange(timeStr, timeStr);
            }
        } });
}));
exports.default = exports.TimePicker;
//# sourceMappingURL=index.js.map