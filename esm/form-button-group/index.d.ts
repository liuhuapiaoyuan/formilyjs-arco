/**
 * 1. FormItem网格布局
 * 2. 居中，居右，居左布局
 * 3. 行内布局
 * 4. 吸底布局
 */
import React from 'react';
import { SpaceProps } from '@arco-design/web-react/es/space';
import { IFormItemProps } from '../form-item';
import './index.scss';
interface IStickyProps {
    offsetTop?: number;
    offsetBottom?: number;
    bottom?: boolean;
    style?: React.CSSProperties;
    className?: string;
    padding?: number;
    align?: React.CSSProperties['textAlign'];
}
type IFormButtonGroupProps = Omit<SpaceProps, 'align'> & {
    align?: React.CSSProperties['textAlign'];
};
type ComposedButtonGroup = React.FC<IFormButtonGroupProps> & {
    Sticky: React.FC<IStickyProps>;
    FormItem: React.FC<IFormItemProps & {
        size?: SpaceProps['size'];
    }>;
};
export declare const FormButtonGroup: ComposedButtonGroup;
export default FormButtonGroup;
