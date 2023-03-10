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
exports.Submit = void 0;
var react_1 = __importDefault(require("react"));
var web_react_1 = require("@arco-design/web-react");
var react_2 = require("@formily/react");
exports.Submit = (0, react_2.observer)(function (_a) {
    var onSubmit = _a.onSubmit, onSubmitFailed = _a.onSubmitFailed, onSubmitSuccess = _a.onSubmitSuccess, props = __rest(_a, ["onSubmit", "onSubmitFailed", "onSubmitSuccess"]);
    var form = (0, react_2.useParentForm)();
    return (react_1.default.createElement(web_react_1.Button, __assign({ htmlType: onSubmit ? 'button' : 'submit', type: "primary" }, props, { loading: props.loading !== undefined ? props.loading : form.submitting, onClick: function (e) {
            if (props.onClick) {
                if (props.onClick(e) === false)
                    return;
            }
            if (onSubmit) {
                form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed);
            }
        } }), props.children));
}, {
    forwardRef: true,
});
exports.default = exports.Submit;
//# sourceMappingURL=index.js.map