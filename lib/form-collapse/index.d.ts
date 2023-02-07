import React from 'react';
import { CollapseProps } from '@arco-design/web-react/es/collapse';
import { CollapseItemProps } from '@arco-design/web-react/es/collapse';
type ActiveKeys = string | number | Array<string | number>;
type ActiveKey = string | number;
interface IFormCollapse {
    activeKeys: ActiveKeys;
    hasActiveKey(key: ActiveKey): boolean;
    setActiveKeys(key: ActiveKeys): void;
    addActiveKey(key: ActiveKey): void;
    removeActiveKey(key: ActiveKey): void;
    toggleActiveKey(key: ActiveKey): void;
}
interface IFormCollapseProps extends CollapseProps {
    formCollapse?: IFormCollapse;
}
type ComposedFormCollapse = React.FC<IFormCollapseProps> & {
    CollapsePanel?: React.FC<CollapseItemProps>;
    createFormCollapse?: (defaultActiveKeys?: ActiveKeys) => IFormCollapse;
};
export declare const FormCollapse: ComposedFormCollapse;
export default FormCollapse;
