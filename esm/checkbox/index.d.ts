import type { CheckboxProps } from '@arco-design/web-react/es/checkbox';
import type { CheckboxGroupProps } from '@arco-design/web-react/es/checkbox/interface';
import { ReactText } from 'react';
type ComposedCheckbox<T extends ReactText = any> = React.FC<CheckboxProps<T>> & {
    Group: React.FC<CheckboxGroupProps<T>>;
};
export declare const Checkbox: ComposedCheckbox;
export default Checkbox;
