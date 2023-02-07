"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var ArcoCheckboxGroup = web_react_1.Checkbox.Group;
exports.CheckboxGroup = (0, react_1.connect)(ArcoCheckboxGroup, (0, react_1.mapProps)({
    dataSource: "options",
}));
exports.default = exports.CheckboxGroup;
//# sourceMappingURL=index.js.map