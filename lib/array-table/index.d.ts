import React from 'react';
import { TableProps, ColumnProps } from '@arco-design/web-react/es/table';
import './index.scss';
import { ArrayBaseMixins } from '../array-base';
type ComposedArrayTable = React.FC<TableProps<any>> & ArrayBaseMixins & {
    Column?: React.FC<ColumnProps<any>>;
};
export declare const ArrayTable: ComposedArrayTable;
export default ArrayTable;
