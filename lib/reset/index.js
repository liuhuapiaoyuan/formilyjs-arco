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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reset = void 0;
var react_1 = __importDefault(require("react"));
var web_react_1 = require("@arco-design/web-react");
var react_2 = require("@formily/react");
var Reset = function (_a) {
    var forceClear = _a.forceClear, validate = _a.validate, props = __rest(_a, ["forceClear", "validate"]);
    var form = (0, react_2.useForm)();
    return (react_1.default.createElement(web_react_1.Button, __assign({}, props, { onClick: function (e) {
            if (props.onClick) {
                props.onClick(e);
            }
            form.reset("*", {
                forceClear: forceClear,
                validate: validate,
            });
        } })));
};
exports.Reset = Reset;
exports.default = exports.Reset;
//# sourceMappingURL=index.js.map