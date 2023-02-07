"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var radio_group_1 = __importDefault(require("../radio-group"));
exports.Radio = (0, react_1.connect)(web_react_1.Radio, (0, react_1.mapProps)({
    value: "checked",
    onInput: "onChange",
}));
exports.Radio.Group = radio_group_1.default;
exports.default = exports.Radio;
//# sourceMappingURL=index.js.map