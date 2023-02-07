import React from 'react';
interface IFormGridContext {
    colWrap?: boolean;
    columns?: number;
    clientWidth?: number;
    maxWidth?: number;
    minWidth?: number;
    maxColumns?: number;
    [key: string]: any;
}
export declare const FormGridContext: React.Context<IFormGridContext>;
export default FormGridContext;
