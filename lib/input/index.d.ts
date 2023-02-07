import React from 'react';
import { ReactFC } from '@formily/react';
import type { InputProps } from '@arco-design/web-react/es/input';
import './index.scss';
export declare const Input: ReactFC<InputProps> & {
    TextArea: React.ForwardRefExoticComponent<Pick<Partial<import("@arco-design/web-react").TextAreaProps & React.RefAttributes<unknown>>, "key" | keyof import("@arco-design/web-react").TextAreaProps> & React.RefAttributes<unknown>>;
};
export default Input;
