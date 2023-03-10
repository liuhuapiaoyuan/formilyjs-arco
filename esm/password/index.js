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
import React from 'react';
import { connect, mapReadPretty } from '@formily/react';
import { Input } from '@arco-design/web-react';
import { PasswordStrength } from './password-strength';
import { PreviewText } from '../preview-text';
export var Password = connect(function (props) {
    var value = props.value, className = props.className, checkStrength = props.checkStrength, others = __rest(props, ["value", "className", "checkStrength"]);
    return (React.createElement("span", { className: className === null || className === void 0 ? void 0 : className[0] },
        React.createElement(Input.Password, __assign({}, others, { value: value })),
        checkStrength && (React.createElement(PasswordStrength, { value: String(value) }, function (score) { return React.createElement(PasswordScore, { score: score }); }))));
}, mapReadPretty(PreviewText.Input));
export default Password;
var blockStyle = {
    position: 'absolute',
    zIndex: 1,
    height: 8,
    top: 0,
    background: '#fff',
    width: 1,
    transform: 'translate(-50%, 0)',
};
/**
 * 密码强度
 * @param param0
 * @returns
 */
function PasswordScore(_a) {
    var score = _a.score;
    return (React.createElement("div", { style: {
            background: '#e0e0e0',
            marginBottom: 3,
            position: 'relative',
        } },
        React.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '20%' }) }),
        React.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '40%' }) }),
        React.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '60%' }) }),
        React.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '80%' }) }),
        React.createElement("div", { style: {
                position: 'relative',
                backgroundImage: '-webkit-linear-gradient(left, #ff5500, #ff9300)',
                transition: 'all 0.35s ease-in-out',
                height: 8,
                width: '100%',
                marginTop: 5,
                clipPath: "polygon(0 0,".concat(score, "% 0,").concat(score, "% 100%,0 100%)"),
            } })));
}
//# sourceMappingURL=index.js.map