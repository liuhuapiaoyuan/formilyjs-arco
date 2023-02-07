import React from 'react';
import { IFormProps, Form } from '@formily/core';
import { IMiddleware } from '@formily/shared';
import { DrawerProps } from '@arco-design/web-react/es/Drawer';
type FormDrawerRenderer = React.ReactElement | ((form: Form) => React.ReactElement);
type Title = string | number | React.ReactElement;
export interface IFormDrawer {
    open(props?: IFormProps): Promise<any>;
    forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer;
    close(): void;
}
export interface IDrawerProps extends Omit<DrawerProps, 'onCancel'> {
    loadingText?: React.ReactNode;
    onCancel?: (e: any) => void | Promise<any> | boolean;
}
export declare function FormDrawer(title: IDrawerProps, id: string, renderer: FormDrawerRenderer): IFormDrawer;
export declare function FormDrawer(title: IDrawerProps, id: FormDrawerRenderer): IFormDrawer;
export declare function FormDrawer(title: Title, id: string, renderer: FormDrawerRenderer): IFormDrawer;
export declare function FormDrawer(title: Title, id: FormDrawerRenderer): IFormDrawer;
export declare namespace FormDrawer {
    var Footer: React.FC<{}>;
    var Portal: {
        (props: React.PropsWithChildren<import("../__builtins__").IPortalProps>): JSX.Element;
        defaultProps: {
            id: string | symbol;
        };
    };
}
export default FormDrawer;
