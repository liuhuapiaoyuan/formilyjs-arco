import React, { ReactNode } from 'react';
import { ButtonProps } from '@arco-design/web-react/es/button';
import { IFormFeedback } from '@formily/core';
export interface ISubmitProps extends Omit<ButtonProps, 'onClick'> {
    onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any;
    onSubmit?: (values: any) => any;
    onSubmitSuccess?: (payload: any) => void;
    onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
    children?: ReactNode;
}
export declare const Submit: React.FC<ISubmitProps>;
export default Submit;
