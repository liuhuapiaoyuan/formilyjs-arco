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
import { connect, mapProps, mapReadPretty } from "@formily/react";
import { InputNumber as ArcoInputNumber } from "@arco-design/web-react";
import { PreviewText } from "../preview-text";
import { IconLoading } from "@arco-design/web-react/icon";
export var InputNumber = connect(ArcoInputNumber, mapProps(function (props, field) {
    return __assign(__assign({}, props), { suffix: (React.createElement("span", null, (field === null || field === void 0 ? void 0 : field["loading"]) || (field === null || field === void 0 ? void 0 : field["validating"]) ? (React.createElement(IconLoading, null)) : (props.suffix))) });
}), mapReadPretty(PreviewText.Input));
export var NumberPicker = InputNumber;
export default InputNumber;
//# sourceMappingURL=index.js.map