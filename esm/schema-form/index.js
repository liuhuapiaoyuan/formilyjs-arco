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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { forwardRef, useContext, useImperativeHandle, useMemo, } from "react";
import { createForm /* , setValidateLanguage */ } from "@formily/core";
import { /* FormConsumer,  */ FormContext } from "@formily/react";
import { Form, SchemaRender } from "../index";
import * as componentsBase from "../components";
import * as scopeBase from "./scope";
// setValidateLanguage('zh-CN');
export var SchemaForm = forwardRef(function (props, ref) {
    var schema = props.schema, _a = props.scope, scope = _a === void 0 ? {} : _a, _b = props.components, components = _b === void 0 ? {} : _b, initialValues = props.initialValues, restProps = __rest(props, ["schema", "scope", "components", "initialValues"]);
    var contextForm = useContext(FormContext);
    var form = useMemo(function () {
        if (contextForm) {
            return contextForm;
        }
        else {
            return createForm({
                initialValues: Object.entries(initialValues !== null && initialValues !== void 0 ? initialValues : {})
                    .filter(function (_a) {
                    var _b = __read(_a, 1), key = _b[0];
                    return initialValues[key] !== undefined;
                })
                    .reduce(function (acc, _a) {
                    var _b;
                    var _c = __read(_a, 2), key = _c[0], value = _c[1];
                    return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
                }, {}),
            });
        }
    }, [initialValues, contextForm]);
    useImperativeHandle(ref, function () { return ({
        getForm: function () {
            return form;
        },
    }); }, [form]);
    return (React.createElement(Form, __assign({ form: form }, restProps),
        React.createElement(SchemaRender, { schema: schema, scope: __assign(__assign({}, scopeBase), scope), components: __assign({ componentsBase: componentsBase }, components) }), props === null || props === void 0 ? void 0 :
        props.children));
});
export default SchemaForm;
//# sourceMappingURL=index.js.map