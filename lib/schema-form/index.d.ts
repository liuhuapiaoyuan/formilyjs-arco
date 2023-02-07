import React from "react";
import { ISchema } from "@formily/react";
interface SchemaFormProps {
    schema: ISchema;
    scope?: {
        [key: string]: any;
    };
    components?: any;
    initialValues?: any;
    [key: string]: any;
}
export declare const SchemaForm: React.ForwardRefExoticComponent<Pick<SchemaFormProps, keyof SchemaFormProps> & React.RefAttributes<unknown>>;
export default SchemaForm;
