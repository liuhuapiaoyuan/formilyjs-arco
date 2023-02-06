import { connect, mapProps } from "@formily/react";
import { Radio as ArcoRadio } from "@arco-design/web-react";
import { RadioProps } from "@arco-design/web-react/es/radio";
import { RadioGroupProps } from "@arco-design/web-react/es/radio";
import RadioGroup from "../radio-group";

type ComposedRadio = React.FC<RadioProps> & {
  Group: React.FC<RadioGroupProps>;
};

export const Radio: ComposedRadio = connect(
  ArcoRadio,
  mapProps({
    value: "checked",
    onInput: "onChange",
  })
) as unknown as ComposedRadio;

Radio.Group = RadioGroup;

export default Radio;
