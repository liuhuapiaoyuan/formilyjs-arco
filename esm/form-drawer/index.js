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
import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createForm, onFormSubmitSuccess, } from '@formily/core';
import { toJS } from '@formily/reactive';
import { FormProvider, observer } from '@formily/react';
import { isNum, isStr, isBool, isFn, applyMiddleware, } from '@formily/shared';
import { Drawer } from '@arco-design/web-react';
import { createPortalProvider, createPortalRoot, loading, } from '../__builtins__';
function isPromise(obj) {
    return (!!obj && //????????????????????????????????????????????????null???undefined???''????????????false
        (typeof obj === 'object' || typeof obj === 'function') && // ??????promise ??? promise.then?????????
        typeof obj.then === 'function');
}
var isTitleComp = function (props) {
    return isNum(props) || isStr(props) || isBool(props) || React.isValidElement(props);
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
export function FormDrawer(title, id, renderer) {
    var _this = this;
    if (isFn(id) || React.isValidElement(id)) {
        renderer = id;
        id = 'form-drawer';
    }
    var env = {
        host: document.createElement('div'),
        form: null,
        promise: null,
        openMiddlewares: [],
    };
    var root = createPortalRoot(env.host, id);
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
    var DrawerContent = observer(function () { return (React.createElement(Fragment, null, isFn(renderer) ? renderer(env.form) : renderer)); });
    var renderDrawer = function (visible) {
        if (visible === void 0) { visible = true; }
        return (React.createElement(Drawer, __assign({ footer: null }, drawer, { visible: visible }), env.form ? (React.createElement(FormProvider, { form: env.form },
            React.createElement(DrawerContent, null))) : null));
    };
    document.body.appendChild(env.host);
    var formDrawer = {
        forOpen: function (middleware) {
            if (isFn(middleware)) {
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
                            case 0: return [4 /*yield*/, loading(drawer.loadingText, function () {
                                    return applyMiddleware(drawerProps, env.openMiddlewares);
                                })];
                            case 1:
                                drawerProps = _a.sent();
                                try {
                                    env.form =
                                        env.form ||
                                            createForm(__assign(__assign({}, drawerProps), { effects: function (form) {
                                                    var _a;
                                                    onFormSubmitSuccess(function () {
                                                        resolve(toJS(form.values));
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
var DrawerFooter = function (props) {
    var ref = useRef(null);
    var _a = __read(useState(), 2), footer = _a[0], setFooter = _a[1];
    var footerRef = useRef();
    var prefixCls = 'arco-drawer';
    useLayoutEffect(function () {
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
    return (React.createElement("div", { ref: ref, style: { display: 'none' } }, footer && createPortal(props.children, footer)));
};
FormDrawer.Footer = DrawerFooter;
FormDrawer.Portal = createPortalProvider('form-drawer');
export default FormDrawer;
//# sourceMappingURL=index.js.map