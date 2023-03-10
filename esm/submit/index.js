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
import { Button } from '@arco-design/web-react';
import { useParentForm, observer } from '@formily/react';
export var Submit = observer(function (_a) {
    var onSubmit = _a.onSubmit, onSubmitFailed = _a.onSubmitFailed, onSubmitSuccess = _a.onSubmitSuccess, props = __rest(_a, ["onSubmit", "onSubmitFailed", "onSubmitSuccess"]);
    var form = useParentForm();
    return (React.createElement(Button, __assign({ htmlType: onSubmit ? 'button' : 'submit', type: "primary" }, props, { loading: props.loading !== undefined ? props.loading : form.submitting, onClick: function (e) {
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
export default Submit;
//# sourceMappingURL=index.js.map