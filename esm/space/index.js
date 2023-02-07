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
import { Space as ArcoSpace } from '@arco-design/web-react';
import * as ReactIs from 'react-is';
// 递归过滤，只要是 就一直过滤
function renderChildren(children) {
    if (!children) {
        return null;
    }
    if (Array.isArray(children)) {
        return children.map(renderChildren);
    }
    if (React.isValidElement(children) && ReactIs.isFragment(children)) {
        return renderChildren(children.props.children);
    }
    return children;
}
export var Space = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.createElement(ArcoSpace, __assign({}, props), renderChildren(children));
};
export default Space;
//# sourceMappingURL=index.js.map