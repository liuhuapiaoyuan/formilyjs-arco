"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var arco_1 = require("@formily/arco");
var core_1 = require("@formily/core");
var react_2 = require("@formily/react");
var config_1 = __importDefault(require("./config"));
var form = (0, core_1.createForm)({});
var Demo = function () { return (react_1.default.createElement(arco_1.Form, { form: form },
    react_1.default.createElement(arco_1.SchemaRender, { schema: config_1.default }),
    react_1.default.createElement(arco_1.Reset, null, "Reset"),
    react_1.default.createElement(react_2.FormConsumer, null, function () { return react_1.default.createElement("div", null, JSON.stringify(form.values)); }))); };
exports.default = Demo;
//# sourceMappingURL=index.js.map