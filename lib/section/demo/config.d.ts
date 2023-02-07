declare const config: {
    type: string;
    properties: {
        checkbox: {
            type: string;
            "x-component": string;
            "x-decorator": string;
            "x-component-props": {
                title: string;
            };
            properties: {
                checkbox: {
                    type: string;
                    title: string;
                    "x-decorator": string;
                    "x-component": string;
                    "x-content": string;
                };
            };
        };
        radio: {
            type: string;
            "x-component": string;
            "x-decorator": string;
            "x-component-props": {
                title: string;
            };
            properties: {
                radio: {
                    type: string;
                    title: string;
                    "x-decorator": string;
                    "x-component": string;
                    "x-component-props": {
                        extra: string;
                    };
                    "x-content": string;
                };
            };
        };
    };
};
export default config;
