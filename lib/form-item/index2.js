"use strict";
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
exports.FormItem = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var BaseItem = function (_a) {
    var children = _a.children, readPretty = _a.readPretty, props = __rest(_a, ["children", "readPretty"]);
    if (!readPretty) {
        return react_1.default.cloneElement(children, props !== null && props !== void 0 ? props : {});
    }
    else {
        return (react_1.default.createElement(web_react_1.Typography.Paragraph, null,
            react_1.default.createElement(web_react_1.Space, null,
                props.title,
                ":",
                react_1.default.cloneElement(children, props))));
    }
};
exports.FormItem = (0, react_2.connect)(BaseItem, (0, react_2.mapProps)({ validateStatus: true, title: true, required: true }, 
// translate label
function (props, field) {
    if ((0, core_1.isVoidField)(field))
        return props;
    if (!field)
        return props;
    if (!props.title) {
        var titleTxt = props.children.props.label;
        return {
            title: typeof titleTxt === "string" ? titleTxt : titleTxt.text,
        };
    }
    else {
        return {
            label: { text: props.title, required: props.required },
        };
    }
}, 
// translate field(semi form item field)
function (props, field) {
    if ((0, core_1.isVoidField)(field))
        return props;
    if (!field)
        return props;
    return {
        field: field.props.name,
    };
}, function (props, field) {
    if ((0, core_1.isVoidField)(field))
        return props;
    if (!field)
        return props;
    var takeMessage = function () {
        var split = function (messages) {
            return messages.reduce(function (buf, text, index) {
                if (!text)
                    return buf;
                return index < messages.length - 1
                    ? buf.concat([text, ", "])
                    : buf.concat([text]);
            }, []);
        };
        if (field.validating)
            return;
        if (props.feedbackText)
            return props.feedbackText;
        if (field.errors.length)
            return split(field.errors);
        if (field.warnings.length)
            return split(field.warnings);
        if (field.successes.length)
            return split(field.successes);
    };
    return {
        feedbackText: takeMessage(),
        extra: props.extra || field.description,
    };
}, function (props, field) {
    var _a;
    if ((0, core_1.isVoidField)(field))
        return props;
    if (!field)
        return props;
    return {
        feedbackStatus: field.validateStatus === "validating"
            ? "pending"
            : ((_a = field.decorator[1]) === null || _a === void 0 ? void 0 : _a.feedbackStatus) || field.validateStatus,
    };
}, function (props, field) {
    var _a;
    if ((0, core_1.isVoidField)(field))
        return props;
    if (!field)
        return props;
    var asterisk = false;
    var readPretty = Boolean(field.readPretty);
    if (field.required && field.pattern !== "readPretty") {
        asterisk = true;
    }
    if ("asterisk" in props) {
        asterisk = (_a = props.asterisk) !== null && _a !== void 0 ? _a : false;
    }
    return {
        asterisk: asterisk,
        readPretty: readPretty,
    };
}));
exports.FormItem.BaseItem = BaseItem;
exports.default = exports.FormItem;
//# sourceMappingURL=index2.js.map