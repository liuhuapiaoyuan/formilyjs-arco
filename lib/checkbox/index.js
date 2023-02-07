"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var checkbox_group_1 = __importDefault(require("../checkbox-group"));
exports.Checkbox = (0, react_1.connect)(web_react_1.Checkbox, (0, react_1.mapProps)({
    value: 'checked',
    onInput: 'onChange',
}));
exports.Checkbox.Group = checkbox_group_1.default;
exports.default = exports.Checkbox;
//# sourceMappingURL=index.js.map