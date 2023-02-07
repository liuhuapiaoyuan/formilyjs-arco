"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefixCls = void 0;
var usePrefixCls = function (tag, props) {
    var _a;
    return (_a = props === null || props === void 0 ? void 0 : props.prefixCls) !== null && _a !== void 0 ? _a : "formily-arco".concat(tag ? "-".concat(tag) : '');
};
exports.usePrefixCls = usePrefixCls;
//# sourceMappingURL=usePrefixCls.js.map