"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var reactive_1 = require("@formily/reactive");
var useAsyncDataSource = function (pattern, service) {
    (0, core_1.onFieldReact)(pattern, function (field) {
        var _a;
        field.loading = true;
        service(field).then((_a = reactive_1.action.bound) === null || _a === void 0 ? void 0 : _a.call(reactive_1.action, function (data) {
            field.dataSource = data;
            field.loading = false;
        }));
    });
};
var form = (0, core_1.createForm)({
    effects: function () {
        useAsyncDataSource('select', function (field) { return __awaiter(void 0, void 0, void 0, function () {
            var linkage;
            return __generator(this, function (_a) {
                linkage = field.query('linkage').get('value');
                if (!linkage) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            if (linkage === 1) {
                                resolve([
                                    {
                                        label: 'AAA',
                                        value: 'aaa',
                                        key: '0',
                                        children: [
                                            {
                                                label: 'Child Node1',
                                                value: 'Child Node1',
                                                key: '0-0',
                                            },
                                            {
                                                label: 'Child Node2',
                                                value: 'Child Node2',
                                                key: '0-1',
                                            },
                                            {
                                                label: 'Child Node3',
                                                value: 'Child Node3',
                                                key: '0-2',
                                            },
                                        ],
                                    },
                                    {
                                        label: 'BBB',
                                        value: 'ccc',
                                        key: '1',
                                        children: [
                                            {
                                                label: 'Child Node1',
                                                value: '1-0',
                                                key: '1-0',
                                            },
                                            {
                                                label: 'Child Node2',
                                                value: '1-1',
                                                key: '1-1',
                                            },
                                            {
                                                label: 'Child Node3',
                                                value: '1-2',
                                                key: '1-2',
                                            },
                                        ],
                                    },
                                ]);
                            }
                            else if (linkage === 2) {
                                resolve([
                                    {
                                        label: 'CCC',
                                        value: 'ccc',
                                        key: '2',
                                        children: [
                                            {
                                                label: 'Child Node1',
                                                value: '2-0',
                                                key: '2-0',
                                            },
                                            {
                                                label: 'Child Node2',
                                                value: '2-1',
                                                key: '2-2',
                                            },
                                            {
                                                label: 'Child Node3',
                                                value: '2-2',
                                                key: '2-2',
                                            },
                                        ],
                                    },
                                    {
                                        label: 'DDD',
                                        value: 'ddd',
                                        key: '3',
                                        children: [
                                            {
                                                label: 'Child Node1',
                                                value: '3-0',
                                                key: '3-0',
                                            },
                                            {
                                                label: 'Child Node2',
                                                value: '3-1',
                                                key: '3-2',
                                            },
                                            {
                                                label: 'Child Node3',
                                                value: '4-2',
                                                key: '4-2',
                                            },
                                        ],
                                    },
                                ]);
                            }
                        }, 1500);
                    })];
            });
        }); });
    },
});
exports.default = (function () { return (react_1.default.createElement(react_2.FormProvider, { form: form },
    react_1.default.createElement(arco_1.SchemaField, null,
        react_1.default.createElement(arco_1.SchemaField.Number, { name: "linkage", title: "\u8054\u52A8\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "Select", enum: [
                { label: '发请求1', value: 1, key: '0' },
                { label: '发请求2', value: 2, key: '1' },
            ], "x-component-props": {
                style: {
                    width: 200,
                },
            } }),
        react_1.default.createElement(arco_1.SchemaField.String, { name: "select", title: "\u5F02\u6B65\u9009\u62E9\u6846", "x-decorator": "FormItem", "x-component": "TreeSelect", "x-component-props": {
                style: {
                    width: 200,
                },
            } })),
    react_1.default.createElement(arco_1.FormButtonGroup, null,
        react_1.default.createElement(arco_1.Submit, { onSubmit: console.log }, "\u63D0\u4EA4")))); });
//# sourceMappingURL=index_2.js.map