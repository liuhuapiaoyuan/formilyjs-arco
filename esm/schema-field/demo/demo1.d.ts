/// <reference types="react" />
export declare const SchemaInput: {
    type: string;
    properties: {
        input: {
            type: string;
            title: string;
            required: boolean;
            'x-decorator': string;
            'x-decorator-props': {
                tooltip: string;
                tooltipProps: {
                    position: string;
                };
            };
            'x-component': string;
            'x-component-props': {
                value: number;
            };
        };
        textarea: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {};
            'x-reactions': {
                dependencies: string[];
                fulfill: {
                    schema: {
                        visible: string;
                    };
                    run: string;
                };
            };
        };
        select: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-component-props': {};
            'x-reactions': string[];
        };
        submit: {
            type: string;
            title: string;
            'x-decorator': string;
            'x-component': string;
            'x-content': string;
            'x-component-props': {
                onSubmit: (e: any) => void;
            };
        };
    };
};
declare const _default: () => JSX.Element;
export default _default;
