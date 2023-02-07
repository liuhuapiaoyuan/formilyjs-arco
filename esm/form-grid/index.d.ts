import React from 'react';
import './index.scss';
export interface IFormGridProps {
    minWidth?: number | number[];
    maxWidth?: number | number[];
    minColumns?: number | number[];
    maxColumns?: number | number[];
    colWrap?: boolean | boolean[];
    breakpoints?: number[];
    columnGap: number;
    rowGap: number;
}
export interface IGridColumnProps {
    gridSpan: number;
}
type ComposedFormGrid = React.FC<IFormGridProps> & {
    GridColumn: React.FC<IGridColumnProps>;
    useGridSpan: (gridSpan: number) => number;
};
export declare const useGridSpan: (gridSpan?: number) => number;
export declare const FormGrid: ComposedFormGrid;
export declare const GridColumn: React.FC<IGridColumnProps>;
export default FormGrid;
