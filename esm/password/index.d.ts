import React from 'react';
import { InputPasswordProps } from '@arco-design/web-react/es/input/interface';
export interface IPasswordProps extends InputPasswordProps {
    /**
     * 开启检测
     * @default true
     */
    checkStrength: boolean;
}
export declare const Password: React.ForwardRefExoticComponent<Partial<IPasswordProps> & React.RefAttributes<unknown>>;
export default Password;
