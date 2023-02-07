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
import React from 'react';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { Input as ArcoInput } from '@arco-design/web-react';
import { IconLoading } from '@arco-design/web-react/icon';
import './index.scss';
import { PreviewText } from '../preview-text';
var ArcoInputTextArea = ArcoInput.TextArea;
var InternalInput = connect(ArcoInput, mapProps({
    value: 'value',
}, function (props, field) {
    return __assign(__assign({}, props), { suffix: (React.createElement("span", null, (field === null || field === void 0 ? void 0 : field['loading']) || (field === null || field === void 0 ? void 0 : field['validating']) ? (React.createElement(IconLoading, { spin: true })) : (props.suffix))) });
}), mapReadPretty(PreviewText.Input));
var TextArea = connect(ArcoInputTextArea, mapProps({
    value: 'value',
}), mapReadPretty(PreviewText.Input));
export var Input = Object.assign(InternalInput, {
    TextArea: TextArea,
});
export default Input;
//# sourceMappingURL=index.js.map