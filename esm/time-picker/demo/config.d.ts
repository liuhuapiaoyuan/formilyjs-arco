declare const config: {
    type: string;
    properties: {
        timePicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
        };
        timeRangePicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                type: string;
            };
        };
    };
};
export default config;
