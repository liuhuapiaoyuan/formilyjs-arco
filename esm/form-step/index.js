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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React, { Fragment } from 'react';
import { action, model, markRaw } from '@formily/reactive';
import { Steps } from '@arco-design/web-react';
import cls from 'classnames';
import { connect, useField, observer, useFieldSchema, RecursionField, } from '@formily/react';
import { usePrefixCls } from '../__builtins__';
var parseSteps = function (schema) {
    var steps = [];
    schema.mapProperties(function (propertySchema, name) {
        var _a;
        if (((_a = propertySchema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('StepPane')) > -1) {
            steps.push({
                name: name,
                props: propertySchema['x-component-props'],
                schema: propertySchema,
            });
        }
    });
    return steps;
};
var createFormStep = function (defaultCurrent) {
    var _a, _b, _c;
    if (defaultCurrent === void 0) { defaultCurrent = 0; }
    var env = {
        form: null,
        field: null,
        steps: [],
    };
    var setDisplay = (_a = action.bound) === null || _a === void 0 ? void 0 : _a.call(action, function (target) {
        var currentStep = env.steps[target];
        env.steps.forEach(function (_a) {
            var _b, _c;
            var name = _a.name;
            (_b = env.form) === null || _b === void 0 ? void 0 : _b.query("".concat((_c = env.field) === null || _c === void 0 ? void 0 : _c.address, ".").concat(name)).take(function (field) {
                if (name === currentStep.name) {
                    field.setDisplay('visible');
                }
                else {
                    field.setDisplay('hidden');
                }
            });
        });
    });
    var next = (_b = action.bound) === null || _b === void 0 ? void 0 : _b.call(action, function () {
        if (formStep.allowNext) {
            setDisplay === null || setDisplay === void 0 ? void 0 : setDisplay(formStep.current + 1);
            formStep.setCurrent(formStep.current + 1);
        }
    });
    var back = (_c = action.bound) === null || _c === void 0 ? void 0 : _c.call(action, function () {
        if (formStep.allowBack) {
            setDisplay === null || setDisplay === void 0 ? void 0 : setDisplay(formStep.current - 1);
            formStep.setCurrent(formStep.current - 1);
        }
    });
    var formStep = model({
        connect: function (steps, field) {
            env.steps = steps;
            env.form = field === null || field === void 0 ? void 0 : field.form;
            env.field = field;
        },
        current: defaultCurrent,
        setCurrent: function (key) {
            formStep.current = key;
        },
        get allowNext() {
            return formStep.current < env.steps.length - 1;
        },
        get allowBack() {
            return formStep.current > 0;
        },
        get steps() {
            return env.steps;
        },
        next: function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, ((_a = env.form) === null || _a === void 0 ? void 0 : _a.validate())];
                        case 1:
                            _c.sent();
                            next === null || next === void 0 ? void 0 : next();
                            return [3 /*break*/, 3];
                        case 2:
                            _b = _c.sent();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        back: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    back === null || back === void 0 ? void 0 : back();
                    return [2 /*return*/];
                });
            });
        },
        submit: function (onSubmit) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2 /*return*/, (_b = (_a = env.form) === null || _a === void 0 ? void 0 : _a.submit) === null || _b === void 0 ? void 0 : _b.call(_a, onSubmit)];
                });
            });
        },
    });
    return markRaw(formStep);
};
export var FormStep = connect(observer(function (_a) {
    var _b;
    var formStep = _a.formStep, className = _a.className, props = __rest(_a, ["formStep", "className"]);
    var field = useField();
    var prefixCls = usePrefixCls('formily-step', props);
    var schema = useFieldSchema();
    var steps = parseSteps(schema);
    var current = props.current || (formStep === null || formStep === void 0 ? void 0 : formStep.current) || 0;
    (_b = formStep === null || formStep === void 0 ? void 0 : formStep.connect) === null || _b === void 0 ? void 0 : _b.call(formStep, steps, field);
    return (React.createElement("div", { className: cls(prefixCls, className) },
        React.createElement(Steps, __assign({}, props, { style: __assign({ marginBottom: 10 }, props.style), current: current }), steps.map(function (_a, key) {
            var stepProps = _a.props;
            return (React.createElement(Steps.Step, __assign({}, stepProps, { key: key })));
        })),
        steps.map(function (_a, key) {
            var name = _a.name, stepSchema = _a.schema;
            if (key !== current) {
                return;
            }
            return React.createElement(RecursionField, { key: key, name: name, schema: stepSchema });
        })));
}));
var StepPane = function (_a) {
    var children = _a.children;
    return (React.createElement(Fragment, null, children));
};
FormStep.StepPane = StepPane;
FormStep.createFormStep = createFormStep;
export default FormStep;
//# sourceMappingURL=index.js.map