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
exports.FormDrawer = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var core_1 = require("@formily/core");
var reactive_1 = require("@formily/reactive");
var react_2 = require("@formily/react");
var shared_1 = require("@formily/shared");
var web_react_1 = require("@arco-design/web-react");
var __builtins__1 = require("../__builtins__");
function isPromise(obj) {
    return (!!obj && //????????????????????????????????????????????????null???undefined???''????????????false
        (typeof obj === 'object' || typeof obj === 'function') && // ??????promise ??? promise.then?????????
        typeof obj.then === 'function');
}
var isTitleComp = function (props) {
    return (0, shared_1.isNum)(props) || (0, shared_1.isStr)(props) || (0, shared_1.isBool)(props) || react_1.default.isValidElement(props);
};
var getDrawerProps = function (props) {
    if (isTitleComp(props)) {
        return {
            title: props,
        };
    }
    else {
        return props;
    }
};
/**
 * ??????????????????
 * @param title
 * @param id
 * @param renderer
 * @returns
 */
function FormDrawer(title, id, renderer) {
    var _this = this;
    if ((0, shared_1.isFn)(id) || react_1.default.isValidElement(id)) {
        renderer = id;
        id = 'form-drawer';
    }
    var env = {
        host: document.createElement('div'),
        form: null,
        promise: null,
        openMiddlewares: [],
    };
    var root = (0, __builtins__1.createPortalRoot)(env.host, id);
    var props = getDrawerProps(title);
    var drawer = __assign(__assign({ width: '40%' }, props), { onCancel: function (e) {
            var _a;
            if (((_a = props === null || props === void 0 ? void 0 : props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props, e)) !== false) {
                formDrawer.close();
            }
        }, afterClose: function () {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
            root.unmount();
        } });
    var DrawerContent = (0, react_2.observer)(function () { return (react_1.default.createElement(react_1.Fragment, null, (0, shared_1.isFn)(renderer) ? renderer(env.form) : renderer)); });
    var renderDrawer = function (visible) {
        if (visible === void 0) { visible = true; }
        return (react_1.default.createElement(web_react_1.Drawer, __assign({ footer: null }, drawer, { visible: visible }), env.form ? (react_1.default.createElement(react_2.FormProvider, { form: env.form },
            react_1.default.createElement(DrawerContent, null))) : null));
    };
    document.body.appendChild(env.host);
    var formDrawer = {
        forOpen: function (middleware) {
            if ((0, shared_1.isFn)(middleware)) {
                env.openMiddlewares.push(middleware);
            }
            return formDrawer;
        },
        open: function (drawerProps) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (env.promise) {
                    return [2 /*return*/, env.promise];
                }
                env.promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, __builtins__1.loading)(drawer.loadingText, function () {
                                    return (0, shared_1.applyMiddleware)(drawerProps, env.openMiddlewares);
                                })];
                            case 1:
                                drawerProps = _a.sent();
                                try {
                                    env.form =
                                        env.form ||
                                            (0, core_1.createForm)(__assign(__assign({}, drawerProps), { effects: function (form) {
                                                    var _a;
                                                    (0, core_1.onFormSubmitSuccess)(function () {
                                                        resolve((0, reactive_1.toJS)(form.values));
                                                        formDrawer.close();
                                                    });
                                                    (_a = drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.effects) === null || _a === void 0 ? void 0 : _a.call(drawerProps, form);
                                                } }));
                                }
                                catch (e) {
                                    reject(e);
                                }
                                root.render(function () { return renderDrawer(false); });
                                setTimeout(function () {
                                    root.render(function () { return renderDrawer(true); });
                                }, 16);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, env.promise];
            });
        }); },
        close: function () {
            if (!env.host) {
                return;
            }
            root.render(function () { return renderDrawer(false); });
        },
    };
    return formDrawer;
}
exports.FormDrawer = FormDrawer;
var DrawerFooter = function (props) {
    var ref = (0, react_1.useRef)(null);
    var _a = __read((0, react_1.useState)(), 2), footer = _a[0], setFooter = _a[1];
    var footerRef = (0, react_1.useRef)();
    var prefixCls = 'arco-drawer';
    (0, react_1.useLayoutEffect)(function () {
        var _a;
        var content = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.closest(".".concat(prefixCls, "-scroll"));
        if (content) {
            if (!footerRef.current) {
                footerRef.current = content.querySelector(".".concat(prefixCls, "-footer"));
                if (!footerRef.current) {
                    footerRef.current = document.createElement('div');
                    footerRef.current.classList.add("".concat(prefixCls, "-footer"));
                    content.appendChild(footerRef.current);
                }
            }
            setFooter(footerRef.current);
        }
    });
    footerRef.current = footer;
    return (react_1.default.createElement("div", { ref: ref, style: { display: 'none' } }, footer && (0, react_dom_1.createPortal)(props.children, footer)));
};
FormDrawer.Footer = DrawerFooter;
FormDrawer.Portal = (0, __builtins__1.createPortalProvider)('form-drawer');
exports.default = FormDrawer;
//# sourceMappingURL=index.js.map