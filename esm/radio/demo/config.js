var radioGroupOptions = [
    {
        label: "Guest",
        value: "Guest",
        extra: "Arco Design",
        style: { width: 120 },
    },
    {
        label: "Developer",
        value: "Developer",
        extra: "Arco Design",
        style: { width: 120 },
        disabled: true,
    },
    {
        label: "Maintainer",
        value: "Maintainer",
        extra: "Arco Design",
        style: { width: 120 },
    },
];
var addGroupOptions = function (field) {
    setTimeout(function () {
        field.dataSource = radioGroupOptions;
    }, 10);
};
var config = {
    type: "object",
    properties: {
        radio: {
            type: "string",
            required: true,
            title: "radio",
            "x-decorator": "FormItem",
            "x-decorator-props": {
                tooltip: "lalalala\nhihihihi",
            },
            "x-component": "Radio",
            "x-component-props": {
                extra: "Arco Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统",
            },
            "x-content": "Arco Design",
        },
        radioGroup: {
            type: "string",
            required: true,
            title: "radio group",
            "x-decorator": "FormItem",
            "x-component": "RadioGroup",
            "x-component-props": {
                // options: radioGroupOptions, // 为啥直接传不行
                mode: "advanced",
            },
            "x-reactions": [addGroupOptions],
        },
    },
};
export default config;
//# sourceMappingURL=config.js.map