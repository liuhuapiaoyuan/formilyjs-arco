declare const config: {
    type: string;
    properties: {
        radio: {
            type: string;
            required: boolean;
            title: string;
            "x-decorator": string;
            "x-decorator-props": {
                tooltip: string;
            };
            "x-component": string;
            "x-component-props": {
                extra: string;
            };
            "x-content": string;
        };
        radioGroup: {
            type: string;
            required: boolean;
            title: string;
            "x-decorator": string;
            "x-component": string;
            "x-component-props": {
                mode: string;
            };
            "x-reactions": ((field: any) => void)[];
        };
    };
};
export default config;
