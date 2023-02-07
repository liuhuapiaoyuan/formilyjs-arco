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
import { Select as ArcoSelect } from "@arco-design/web-react";
import { IconLoading } from "@arco-design/web-react/icon";
import { PreviewText } from "../preview-text";
export var Select = connect(ArcoSelect, mapProps({
    loading: true,
    dataSource: "options",
}, function (props, field) {
    return __assign(__assign({}, props), { suffix: (field === null || field === void 0 ? void 0 : field["loading"]) || (field === null || field === void 0 ? void 0 : field["validating"]) ? (React.createElement(IconLoading, null)) : (props.suffix) });
}), mapReadPretty(PreviewText.Select));
export default Select;
//# sourceMappingURL=index.js.map