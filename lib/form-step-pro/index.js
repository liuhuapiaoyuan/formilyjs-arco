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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStepPro = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var shared_1 = require("@formily/shared");
var classnames_1 = __importDefault(require("classnames"));
var __builtins__1 = require("../__builtins__");
var form_step_1 = require("../form-step");
var FormStepProContext = (0, react_1.createContext)(null);
var useFormStepPro = function () { return (0, react_1.useContext)(FormStepProContext); };
var parseSchema = function (schema) {
    var schemaStep = { steps: [] };
    schema.mapProperties(function (propertySchema, name) {
        var _a, _b;
        if (((_a = propertySchema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('StepPane')) > -1) {
            schemaStep.steps.push({
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            });
        }
        if (((_b = propertySchema['x-component']) === null || _b === void 0 ? void 0 : _b.indexOf('Previous')) > -1) {
            schemaStep.previous = {
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            };
        }
        if (/NextWithSubmit$/.test(propertySchema['x-component'])) {
            schemaStep.nextWithSubmit = {
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            };
        }
        if (/Next$/.test(propertySchema['x-component'])) {
            schemaStep.next = {
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            };
        }
        if (/\.Submit$/.test(propertySchema['x-component'])) {
            schemaStep.submit = {
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            };
        }
    });
    return schemaStep;
};
var Previous = function (props) {
    var _a;
    var text = props.text, restProps = __rest(props, ["text"]);
    var formStepCtx = useFormStepPro();
    return (react_1.default.createElement(web_react_1.Button, __assign({}, restProps, { disabled: (formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.field.disabled) || !((_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.allowBack), onClick: function () {
            var _a;
            (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.back();
        } }), text));
};
var Next = function (props) {
    var _a;
    var text = props.text, restProps = __rest(props, ["text"]);
    var formStepCtx = useFormStepPro();
    return (react_1.default.createElement(web_react_1.Button, __assign({}, restProps, { disabled: (formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.field.disabled) || !((_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.allowNext), onClick: function () {
            var _a;
            (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.next();
        } }), text));
};
var NextWithSubmit = function (props) {
    var _a, _b;
    var text = props.text, onSubmit = props.onSubmit, restProps = __rest(props, ["text", "onSubmit"]);
    var formStepCtx = useFormStepPro();
    var _c = ((_b = (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props) === null || _a === void 0 ? void 0 : _a.formStep) !== null && _b !== void 0 ? _b : {}).current, current = _c === void 0 ? 0 : _c;
    var form = (0, react_2.useForm)();
    var picks = Object.entries(form.getFormGraph())
        .filter(function (_a) {
        var _b = __read(_a, 2), value = _b[1];
        return value.display === 'visible' && value.displayName === 'Field';
    })
        .map(function (_a) {
        var _b = __read(_a, 2), value = _b[1];
        return value.path;
    });
    return (react_1.default.createElement(web_react_1.Button, __assign({}, restProps, { onClick: function () {
            var _a, _b;
            (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.submit(function (values) {
                var _a, _b;
                var target = {};
                picks.forEach(function (pickPath) {
                    var parser = shared_1.FormPath.parse(pickPath);
                    parser.setIn(target, parser.getIn(values));
                });
                if (onSubmit) {
                    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(target, current);
                }
                else {
                    (_b = (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props) === null || _a === void 0 ? void 0 : _a.onSubmit) === null || _b === void 0 ? void 0 : _b.call(_a, target);
                }
            });
            (_b = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _b === void 0 ? void 0 : _b.next();
        } }), text));
};
var Submit = function (props) {
    var _a;
    var text = props.text, restProps = __rest(props, ["text"]);
    var formStepCtx = useFormStepPro();
    return (react_1.default.createElement(web_react_1.Button, __assign({}, restProps, { disabled: (formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.field.disabled) || ((_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.allowNext), onClick: function () {
            var _a, _b;
            (_a = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props.formStep) === null || _a === void 0 ? void 0 : _a.submit((_b = formStepCtx === null || formStepCtx === void 0 ? void 0 : formStepCtx.props) === null || _b === void 0 ? void 0 : _b.onSubmit);
        } }), text));
};
exports.FormStepPro = (0, react_2.connect)((0, react_2.observer)(function (_a) {
    var _b;
    var propsFormStep = _a.formStep, className = _a.className, onSubmit = _a.onSubmit, props = __rest(_a, ["formStep", "className", "onSubmit"]);
    var field = (0, react_2.useField)();
    var formStep = (0, react_1.useMemo)(function () { var _a; return propsFormStep || ((_a = form_step_1.FormStep.createFormStep) === null || _a === void 0 ? void 0 : _a.call(form_step_1.FormStep)); }, [propsFormStep]);
    var prefixCls = (0, __builtins__1.usePrefixCls)(props.direction, {
        prefixCls: 'formily-step-pro',
    });
    var schema = (0, react_2.useFieldSchema)();
    var _c = parseSchema(schema), steps = _c.steps, previous = _c.previous, next = _c.next, nextWithSubmit = _c.nextWithSubmit, submit = _c.submit;
    var current = props.current || (formStep === null || formStep === void 0 ? void 0 : formStep.current) || 0;
    (_b = formStep === null || formStep === void 0 ? void 0 : formStep.connect) === null || _b === void 0 ? void 0 : _b.call(formStep, steps, field);
    return (react_1.default.createElement(FormStepProContext.Provider, { value: { props: { formStep: formStep, onSubmit: onSubmit }, field: field, schema: schema } },
        react_1.default.createElement("div", { className: (0, classnames_1.default)(prefixCls, className) },
            react_1.default.createElement(web_react_1.Steps, __assign({}, props, { style: __assign({ marginBottom: 10 }, props.style), current: current }), steps.map(function (_a, key) {
                var stepProps = _a.props;
                return (react_1.default.createElement(web_react_1.Steps.Step, __assign({}, stepProps, { key: key })));
            })),
            steps.map(function (_a, key) {
                var name = _a.name, stepSchema = _a.schema;
                if (key !== current) {
                    return;
                }
                return (react_1.default.createElement(react_2.RecursionField, { key: key, name: name, schema: stepSchema }));
            }),
            react_1.default.createElement(web_react_1.Space, null,
                previous ? (react_1.default.createElement(react_2.RecursionField, { schema: previous.schema, name: previous.name, key: previous.name })) : null,
                next ? (react_1.default.createElement(react_2.RecursionField, { schema: next.schema, name: next.name, key: next.name })) : null,
                nextWithSubmit ? (react_1.default.createElement(react_2.RecursionField, { schema: nextWithSubmit.schema, name: nextWithSubmit.name, key: nextWithSubmit.name })) : null,
                submit ? (react_1.default.createElement(react_2.RecursionField, { schema: submit.schema, name: submit.name, key: submit.name })) : null))));
}));
var StepPane = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.Fragment, null, children));
};
exports.FormStepPro.StepPane = StepPane;
exports.FormStepPro.Previous = Previous;
exports.FormStepPro.Next = Next;
exports.FormStepPro.NextWithSubmit = NextWithSubmit;
exports.FormStepPro.Submit = Submit;
exports.default = exports.FormStepPro;
//# sourceMappingURL=index.js.map