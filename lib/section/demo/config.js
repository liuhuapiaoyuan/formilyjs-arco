"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    type: "object",
    properties: {
        checkbox: {
            type: "object",
            "x-component": "Section",
            "x-decorator": "FormItem",
            "x-component-props": {
                title: "checkbox area",
            },
            properties: {
                checkbox: {
                    type: "string",
                    title: "checkbox",
                    "x-decorator": "FormItem",
                    "x-component": "Checkbox",
                    "x-content": "apple",
                },
            },
        },
        radio: {
            type: "object",
            "x-component": "Section",
            "x-decorator": "FormItem",
            "x-component-props": {
                title: "radio area",
            },
            properties: {
                radio: {
                    type: "string",
                    title: "radio",
                    "x-decorator": "FormItem",
                    "x-component": "Radio",
                    "x-component-props": {
                        extra: "Arco Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统",
                    },
                    "x-content": "Arco Design",
                },
            },
        },
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map