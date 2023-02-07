declare const config: {
    type: string;
    properties: {
        checkbox: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            enum: {
                label: string;
                value: string;
                children: {
                    label: string;
                    value: string;
                    children: {
                        label: string;
                        value: string;
                    }[];
                }[];
            }[];
            'x-component-props': {
                style: {
                    width: number;
                };
            };
        };
        checkbox2: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                style: {
                    width: number;
                };
            };
            'x-reactions': ((field: any) => void)[];
        };
    };
};
export default config;
