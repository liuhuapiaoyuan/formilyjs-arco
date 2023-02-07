import React from 'react';
import './index.scss';
export interface IFormLayoutProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    colon?: boolean;
    labelAlign?: 'right' | 'left';
    wrapperAlign?: 'right' | 'left';
    labelWrap?: boolean;
    labelWidth?: number;
    wrapperWidth?: number;
    wrapperWrap?: boolean;
    labelCol?: number;
    wrapperCol?: number;
    fullness?: boolean;
    size?: 'small' | 'default' | 'large';
    layout?: 'vertical' | 'horizontal' | 'inline';
    direction?: 'rtl' | 'ltr';
    inset?: boolean;
    shallow?: boolean;
    tooltipLayout?: 'icon' | 'text';
    feedbackLayout?: 'loose' | 'terse' | 'popover';
    bordered?: boolean;
}
export declare const FormLayoutContext: React.Context<IFormLayoutProps>;
export declare const FormLayoutShallowContext: React.Context<IFormLayoutProps>;
export declare const useFormLayout: () => IFormLayoutProps;
export declare const useFormShallowLayout: () => IFormLayoutProps;
export declare const FormLayout: React.FC<IFormLayoutProps> & {
    useFormLayout: () => IFormLayoutProps;
    useFormShallowLayout: () => IFormLayoutProps;
};
export default FormLayout;
