import React from 'react';
import { CollapseProps, CollapseItemProps } from '@arco-design/web-react/es/collapse';
import { ArrayBaseMixins, IArrayBaseProps } from '../array-base';
import './index.scss';
export interface IArrayCollapseProps extends CollapseProps {
    defaultOpenPanelCount?: number;
    prefixCls?: string;
    arrayBaseProps?: IArrayBaseProps;
}
type ComposedArrayCollapse = React.FC<IArrayCollapseProps> & ArrayBaseMixins & {
    CollapsePanel?: React.FC<CollapseItemProps>;
};
export declare const ArrayCollapse: ComposedArrayCollapse;
export default ArrayCollapse;
