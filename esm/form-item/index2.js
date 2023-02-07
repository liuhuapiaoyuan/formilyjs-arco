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
import React from "react";
import { isVoidField } from "@formily/core";
import { connect, mapProps } from "@formily/react";
import { Typography, Space } from "@arco-design/web-react";
var BaseItem = function (_a) {
    var children = _a.children, readPretty = _a.readPretty, props = __rest(_a, ["children", "readPretty"]);
    if (!readPretty) {
        return React.cloneElement(children, props !== null && props !== void 0 ? props : {});
    }
    else {
        return (React.createElement(Typography.Paragraph, null,
            React.createElement(Space, null,
                props.title,
                ":",
                React.cloneElement(children, props))));
    }
};
export var FormItem = connect(BaseItem, mapProps({ validateStatus: true, title: true, required: true }, 
// translate label
function (props, field) {
    if (isVoidField(field))
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
    if (isVoidField(field))
        return props;
    if (!field)
        return props;
    return {
        field: field.props.name,
    };
}, function (props, field) {
    if (isVoidField(field))
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
    if (isVoidField(field))
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
    if (isVoidField(field))
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
FormItem.BaseItem = BaseItem;
export default FormItem;
//# sourceMappingURL=index2.js.map