declare const config: {
    type: string;
    properties: {
        datePicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                onChange: (...p: any[]) => void;
            };
        };
        dateTimePicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                type: string;
            };
        };
        dateRangePicker: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {
                type: string;
            };
        };
        dateTimeRangePicker: {
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
