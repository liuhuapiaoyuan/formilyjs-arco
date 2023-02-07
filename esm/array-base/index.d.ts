import React from 'react';
import { ButtonProps } from '@arco-design/web-react/es/button';
import type { IconProps as ArcoIconProps } from '@arco-design/web-react/icon';
import { Schema, JSXComponent } from '@formily/react';
import { ArrayField } from '@formily/core';
import './index.scss';
interface IconProps extends ArcoIconProps {
    style?: React.CSSProperties;
    spin?: boolean;
}
export interface IArrayBaseAdditionProps extends ButtonProps {
    title?: string;
    method?: 'push' | 'unshift';
}
export interface IArrayBaseProps {
    disabled?: boolean;
    onAdd?: (index: number) => void;
    onRemove?: (index: number) => void;
    onMoveDown?: (index: number) => void;
    onMoveUp?: (index: number) => void;
}
export interface IArrayBaseContext {
    props: IArrayBaseProps;
    field: ArrayField;
    schema: Schema;
}
export interface IArrayBaseItemProps {
    index: number;
    style?: React.CSSProperties;
    record: any;
}
export type ArrayBaseMixins = {
    Addition?: React.FC<IArrayBaseAdditionProps>;
    Remove?: React.FC<IconProps & {
        index?: number;
    }>;
    MoveUp?: React.FC<IconProps & {
        index?: number;
    }>;
    MoveDown?: React.FC<IconProps & {
        index?: number;
    }>;
    SortHandle?: React.FC<IconProps & {
        index?: number;
    }>;
    Index?: React.FC;
    useArray?: () => IArrayBaseContext;
    useIndex?: () => number;
    useRecord?: (record?: number) => any;
};
type ComposedArrayBase = React.FC<React.PropsWithChildren<IArrayBaseProps>> & ArrayBaseMixins & {
    Item: React.FC<IArrayBaseItemProps>;
    mixin: <T extends JSXComponent>(target: T) => T & ArrayBaseMixins;
};
export declare const ArrayBase: ComposedArrayBase;
export default ArrayBase;
