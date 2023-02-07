var config = {
    type: 'object',
    properties: {
        password: {
            type: 'string',
            title: '输入框',
            'x-decorator': 'FormItem',
            'x-component': 'Password',
            'x-component-props': {
                checkStrength: true,
            },
        },
    },
};
export default config;
//# sourceMappingURL=config.js.map