declare const config: {
    type: string;
    properties: {
        checkbox: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-content': string;
        };
        checkboxGroup1: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            enum: string[];
            'x-component-props': {};
        };
        checkboxGroup: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {};
            'x-reactions': ((field: any) => void)[];
        };
    };
};
export default config;
