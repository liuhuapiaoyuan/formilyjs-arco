declare const config: {
    type: string;
    properties: {
        string_array: {
            type: string;
            'x-component': string;
            'x-decorator': string;
            title: string;
            items: {
                type: string;
                'x-component': string;
                properties: {
                    sort: {
                        type: string;
                        'x-decorator': string;
                        'x-component': string;
                    };
                    index: {
                        type: string;
                        'x-decorator': string;
                        'x-component': string;
                        'x-component-props': {
                            renderIndex(index: number): string;
                        };
                    };
                    input: {
                        type: string;
                        'x-decorator': string;
                        'x-component': string;
                    };
                    remove: {
                        type: string;
                        'x-decorator': string;
                        'x-component': string;
                    };
                };
            };
            properties: {
                add: {
                    type: string;
                    title: string;
                    'x-component': string;
                };
            };
        };
        array: {
            type: string;
            'x-component': string;
            'x-decorator': string;
            title: string;
            items: {
                type: string;
                properties: {
                    space: {
                        type: string;
                        'x-component': string;
                        properties: {
                            sort: {
                                type: string;
                                'x-decorator': string;
                                'x-component': string;
                            };
                            date: {
                                type: string;
                                title: string;
                                required: boolean;
                                'x-decorator': string;
                                'x-component': string;
                                'x-component-props': {
                                    style: {
                                        width: number;
                                    };
                                };
                            };
                            input: {
                                type: string;
                                title: string;
                                required: boolean;
                                'x-decorator': string;
                                'x-component': string;
                            };
                            select: {
                                type: string;
                                title: string;
                                required: boolean;
                                enum: {
                                    label: string;
                                    value: number;
                                }[];
                                'x-decorator': string;
                                'x-component': string;
                                'x-component-props': {
                                    style: {
                                        width: number;
                                    };
                                };
                            };
                            remove: {
                                type: string;
                                'x-decorator': string;
                                'x-component': string;
                            };
                        };
                    };
                };
            };
            properties: {
                add: {
                    type: string;
                    title: string;
                    'x-component': string;
                };
            };
        };
    };
};
export default config;
