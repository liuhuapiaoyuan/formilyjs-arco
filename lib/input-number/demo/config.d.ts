declare const config: {
    type: string;
    properties: {
        inputNumber: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                step: number;
            };
        };
        numberPicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                step: number;
            };
        };
    };
};
export default config;
