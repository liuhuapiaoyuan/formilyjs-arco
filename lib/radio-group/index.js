"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = void 0;
var react_1 = require("@formily/react");
var web_react_1 = require("@arco-design/web-react");
var ArcoRadioGroup = web_react_1.Radio.Group;
exports.RadioGroup = (0, react_1.connect)(ArcoRadioGroup, (0, react_1.mapProps)({
    dataSource: "options",
}));
exports.default = exports.RadioGroup;
//# sourceMappingURL=index.js.map