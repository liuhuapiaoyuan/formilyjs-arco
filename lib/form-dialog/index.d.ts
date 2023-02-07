import React from "react";
import { IFormProps, Form } from "@formily/core";
import { IMiddleware } from "@formily/shared";
import type { ModalProps } from "@arco-design/web-react/es/modal/interface";
type FormDialogRenderer = React.ReactElement | ((form: Form) => React.ReactElement);
type ModalTitle = string | number | React.ReactElement;
export interface IFormDialog {
    forOpen(middleware: IMiddleware<IFormProps>): IFormDialog;
    forConfirm(middleware: IMiddleware<Form>): IFormDialog;
    forCancel(middleware: IMiddleware<Form>): IFormDialog;
    open(props?: IFormProps): Promise<any>;
    close(): void;
}
export interface IModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
    getModalProps?: (props: IModalProps & {
        triggerConfirm?: () => any;
        triggerCancel?: () => any;
    }) => IModalProps;
    onOk?: (e: any) => void | Promise<any> | boolean;
    onCancel?: () => void | Promise<any> | boolean;
    loadingText?: React.ReactNode;
}
export declare function FormDialog(title: IModalProps, id: string, renderer: FormDialogRenderer): IFormDialog;
export declare function FormDialog(title: IModalProps, renderer: FormDialogRenderer): IFormDialog;
export declare function FormDialog(title: ModalTitle, id: string, renderer: FormDialogRenderer): IFormDialog;
export declare function FormDialog(title: ModalTitle, renderer: FormDialogRenderer): IFormDialog;
export declare namespace FormDialog {
    var Footer: React.FC<{}>;
    var Portal: {
        (props: React.PropsWithChildren<import("../__builtins__").IPortalProps>): JSX.Element;
        defaultProps: {
            id: string | symbol;
        };
    };
}
export default FormDialog;
