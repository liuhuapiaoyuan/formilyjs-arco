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
import React, { Fragment, useRef, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createForm } from "@formily/core";
import { toJS } from "@formily/reactive";
import { FormProvider, Observer, observer } from "@formily/react";
import { isNum, isStr, isBool, isFn, applyMiddleware, } from "@formily/shared";
import { Modal } from "@arco-design/web-react";
import { usePrefixCls, loading, createPortalProvider, createPortalRoot, } from "../__builtins__";
var isModalTitle = function (props) {
    return isNum(props) || isStr(props) || isBool(props) || React.isValidElement(props);
};
var getModelProps = function (props) {
    if (isModalTitle(props)) {
        return {
            title: props,
        };
    }
    else {
        return props;
    }
};
export function FormDialog(title, id, renderer) {
    var _this = this;
    if (isFn(id) || React.isValidElement(id)) {
        renderer = id;
        id = "form-dialog";
    }
    var env = {
        host: document.createElement("div"),
        form: null,
        promise: null,
        openMiddlewares: [],
        confirmMiddlewares: [],
        cancelMiddlewares: [],
    };
    var root = createPortalRoot(env.host, id);
    var props = getModelProps(title);
    var modal = __assign(__assign({}, props), { afterClose: function () {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
            root.unmount();
        } });
    var DialogContent = observer(function () { return (React.createElement(Fragment, null, isFn(renderer) ? renderer(env.form) : renderer)); });
    var renderDialog = function (visible, resolve, reject) {
        if (visible === void 0) { visible = true; }
        return (React.createElement(Observer, null, function () {
            var _a, _b;
            return (React.createElement(Modal, __assign({}, modal, (((_a = modal === null || modal === void 0 ? void 0 : modal.getModalProps) === null || _a === void 0 ? void 0 : _a.call(modal, __assign(__assign({}, modal), { triggerConfirm: resolve, triggerCancel: reject }))) || {}), { visible: visible, confirmLoading: (_b = env === null || env === void 0 ? void 0 : env.form) === null || _b === void 0 ? void 0 : _b.submitting, onCancel: function () {
                    var _a;
                    if (((_a = modal === null || modal === void 0 ? void 0 : modal.onCancel) === null || _a === void 0 ? void 0 : _a.call(modal)) !== false) {
                        reject === null || reject === void 0 ? void 0 : reject();
                    }
                }, onOk: function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        if (((_a = modal === null || modal === void 0 ? void 0 : modal.onOk) === null || _a === void 0 ? void 0 : _a.call(modal, e)) !== false) {
                            resolve === null || resolve === void 0 ? void 0 : resolve();
                        }
                        return [2 /*return*/];
                    });
                }); }, onConfirm: function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        if (((_a = modal === null || modal === void 0 ? void 0 : modal.onOk) === null || _a === void 0 ? void 0 : _a.call(modal, e)) !== false) {
                            resolve === null || resolve === void 0 ? void 0 : resolve();
                        }
                        return [2 /*return*/];
                    });
                }); } }), env.form ? (React.createElement(FormProvider, { form: env.form },
                React.createElement(DialogContent, null))) : null));
        }));
    };
    document.body.appendChild(env.host);
    var formDialog = {
        forOpen: function (middleware) {
            if (isFn(middleware)) {
                env.openMiddlewares.push(middleware);
            }
            return formDialog;
        },
        forConfirm: function (middleware) {
            if (isFn(middleware)) {
                env.confirmMiddlewares.push(middleware);
            }
            return formDialog;
        },
        forCancel: function (middleware) {
            if (isFn(middleware)) {
                env.cancelMiddlewares.push(middleware);
            }
            return formDialog;
        },
        open: function (formProps) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (env.promise) {
                    return [2 /*return*/, env.promise];
                }
                env.promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, loading(modal.loadingText, function () {
                                        return applyMiddleware(formProps, env.openMiddlewares);
                                    })];
                            case 1:
                                formProps = _a.sent();
                                env.form = env.form || createForm(formProps);
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                reject(e_1);
                                return [3 /*break*/, 3];
                            case 3:
                                root.render(function () {
                                    return renderDialog(true, function () {
                                        var _a;
                                        (_a = env.form) === null || _a === void 0 ? void 0 : _a.submit(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, applyMiddleware(env.form, env.confirmMiddlewares)];
                                                    case 1:
                                                        _b.sent();
                                                        resolve(toJS((_a = env.form) === null || _a === void 0 ? void 0 : _a.values));
                                                        formDialog.close();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }).catch(function () {
                                            /** do nothing */
                                        });
                                    }, function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, loading(modal.loadingText, function () {
                                                        return applyMiddleware(env.form, env.cancelMiddlewares);
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    formDialog.close();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                });
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
            root.render(function () { return renderDialog(false); });
        },
    };
    return formDialog;
}
var DialogFooter = function (props) {
    var ref = useRef(null);
    var _a = __read(useState(), 2), footer = _a[0], setFooter = _a[1];
    var footerRef = useRef();
    var prefixCls = usePrefixCls("", {
        prefixCls: "semi-modal",
    });
    useLayoutEffect(function () {
        var _a;
        var content = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.closest(".".concat(prefixCls, "-content"));
        if (content) {
            if (!footerRef.current) {
                footerRef.current = content.querySelector(".".concat(prefixCls, "-footer"));
                if (!footerRef.current) {
                    footerRef.current = document.createElement("div");
                    footerRef.current.classList.add("".concat(prefixCls, "-footer"));
                    content.appendChild(footerRef.current);
                }
            }
            setFooter(footerRef.current);
        }
    });
    footerRef.current = footer;
    return (React.createElement("div", { ref: ref, style: { display: "none" } }, footer && createPortal(props.children, footer)));
};
FormDialog.Footer = DialogFooter;
FormDialog.Portal = createPortalProvider("form-dialog");
export default FormDialog;
//# sourceMappingURL=index.js.map