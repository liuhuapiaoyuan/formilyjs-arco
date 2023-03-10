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
exports.Password = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var password_strength_1 = require("./password-strength");
var preview_text_1 = require("../preview-text");
exports.Password = (0, react_2.connect)(function (props) {
    var value = props.value, className = props.className, checkStrength = props.checkStrength, others = __rest(props, ["value", "className", "checkStrength"]);
    return (react_1.default.createElement("span", { className: className === null || className === void 0 ? void 0 : className[0] },
        react_1.default.createElement(web_react_1.Input.Password, __assign({}, others, { value: value })),
        checkStrength && (react_1.default.createElement(password_strength_1.PasswordStrength, { value: String(value) }, function (score) { return react_1.default.createElement(PasswordScore, { score: score }); }))));
}, (0, react_2.mapReadPretty)(preview_text_1.PreviewText.Input));
exports.default = exports.Password;
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
 * ????????????
 * @param param0
 * @returns
 */
function PasswordScore(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { style: {
            background: '#e0e0e0',
            marginBottom: 3,
            position: 'relative',
        } },
        react_1.default.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '20%' }) }),
        react_1.default.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '40%' }) }),
        react_1.default.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '60%' }) }),
        react_1.default.createElement("div", { style: __assign(__assign({}, blockStyle), { left: '80%' }) }),
        react_1.default.createElement("div", { style: {
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