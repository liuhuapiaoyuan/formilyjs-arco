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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaForm = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var index_1 = require("../index");
var componentsBase = __importStar(require("../components"));
var scopeBase = __importStar(require("./scope"));
// setValidateLanguage('zh-CN');
exports.SchemaForm = (0, react_1.forwardRef)(function (props, ref) {
    var schema = props.schema, _a = props.scope, scope = _a === void 0 ? {} : _a, _b = props.components, components = _b === void 0 ? {} : _b, initialValues = props.initialValues, restProps = __rest(props, ["schema", "scope", "components", "initialValues"]);
    var contextForm = (0, react_1.useContext)(react_2.FormContext);
    var form = (0, react_1.useMemo)(function () {
        if (contextForm) {
            return contextForm;
        }
        else {
            return (0, core_1.createForm)({
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
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        getForm: function () {
            return form;
        },
    }); }, [form]);
    return (react_1.default.createElement(index_1.Form, __assign({ form: form }, restProps),
        react_1.default.createElement(index_1.SchemaRender, { schema: schema, scope: __assign(__assign({}, scopeBase), scope), components: __assign({ componentsBase: componentsBase }, components) }), props === null || props === void 0 ? void 0 :
        props.children));
});
exports.default = exports.SchemaForm;
//# sourceMappingURL=index.js.map