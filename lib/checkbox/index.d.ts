/// <reference types="react" />
import { CheckboxProps } from "@arco-design/web-react/es/checkbox";
import { CheckboxGroupProps } from "@arco-design/web-react/es/checkbox";
type ComposedCheckbox = React.FC<CheckboxProps> & {
    Group: React.FC<CheckboxGroupProps>;
};
export declare const Checkbox: ComposedCheckbox;
export default Checkbox;
