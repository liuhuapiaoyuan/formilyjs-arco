import { JSXElementConstructor } from 'react';
type JSXComponent = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
export declare const SchemaField: {
    <Decorator extends import("@formily/react").JSXComponent, Component extends import("@formily/react").JSXComponent>(props: import("@formily/react").ISchemaFieldProps<Decorator, Component, import("@formily/core").ObjectField<Decorator, Component>>): JSX.Element;
    displayName: string;
    Markup: {
        <Decorator_1 extends string, Component_1 extends string>(props: import("@formily/react").ISchemaMarkupFieldProps<Record<string, JSXComponent>, Component_1, Decorator_1>): JSX.Element;
        displayName: string;
    };
    String: {
        <Decorator_2 extends string, Component_2 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_2, Decorator_2>): JSX.Element;
        displayName: string;
    };
    Object: {
        <Decorator_3 extends string, Component_3 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_3, Decorator_3>): JSX.Element;
        displayName: string;
    };
    Array: {
        <Decorator_4 extends string, Component_4 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_4, Decorator_4>): JSX.Element;
        displayName: string;
    };
    Boolean: {
        <Decorator_5 extends string, Component_5 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_5, Decorator_5>): JSX.Element;
        displayName: string;
    };
    Date: {
        <Decorator_6 extends string, Component_6 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_6, Decorator_6>): JSX.Element;
        displayName: string;
    };
    DateTime: {
        <Decorator_7 extends string, Component_7 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_7, Decorator_7>): JSX.Element;
        displayName: string;
    };
    Void: {
        <Decorator_8 extends string, Component_8 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_8, Decorator_8>): JSX.Element;
        displayName: string;
    };
    Number: {
        <Decorator_9 extends string, Component_9 extends string>(props: import("@formily/react").ISchemaTypeFieldProps<Record<string, JSXComponent>, Component_9, Decorator_9>): JSX.Element;
        displayName: string;
    };
};
export declare const SchemaRender: (args: any) => JSX.Element;
export default SchemaRender;
