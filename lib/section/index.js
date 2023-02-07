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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var react_1 = __importDefault(require("react"));
var web_react_1 = require("@arco-design/web-react");
var react_2 = require("@formily/react");
exports.Section = (0, react_2.observer)(function (props) {
    var fieldSchema = (0, react_2.useFieldSchema)();
    var items = [];
    // 获取 properties 里子元素配置，并在下面渲染
    fieldSchema.mapProperties(function (schema, name) {
        items.push({
            name: name,
            schema: schema,
        });
    });
    return (react_1.default.createElement(web_react_1.Card, __assign({ bordered: false, bodyStyle: { padding: 0 }, size: "small" }, props), items.map(function (_a, index) {
        var schema = _a.schema, name = _a.name;
        return (react_1.default.createElement(react_2.RecursionField, { schema: schema, name: name, key: name.toString() + index }));
    })));
});
exports.default = exports.Section;
//# sourceMappingURL=index.js.map