declare const config: {
    type: string;
    properties: {
        password: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                checkStrength: boolean;
            };
        };
    };
};
export default config;
