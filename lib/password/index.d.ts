import React from "react";
import { InputProps } from "@arco-design/web-react/es/input";
export interface IPasswordProps extends InputProps {
    checkStrength: boolean;
}
export declare const Password: React.ForwardRefExoticComponent<Partial<IPasswordProps> & React.RefAttributes<unknown>>;
export default Password;
