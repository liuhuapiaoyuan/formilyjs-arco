/// <reference types="react" />
import { RadioProps } from "@arco-design/web-react/es/radio";
import { RadioGroupProps } from "@arco-design/web-react/es/radio";
type ComposedRadio = React.FC<RadioProps> & {
    Group: React.FC<RadioGroupProps>;
};
export declare const Radio: ComposedRadio;
export default Radio;
