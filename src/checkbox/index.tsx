import { connect, mapProps } from "@formily/react";
import { Checkbox as ArcoCheckbox } from "@arco-design/web-react";
import { CheckboxProps } from "@arco-design/web-react/es/checkbox";
import { CheckboxGroupProps } from "@arco-design/web-react/es/checkbox";
import CheckboxGroup from "../checkbox-group";

type ComposedCheckbox = React.FC<CheckboxProps> & {
  Group: React.FC<CheckboxGroupProps>;
};

export const Checkbox: ComposedCheckbox = connect(
  ArcoCheckbox,
  mapProps({
    value: "checked",
    onInput: "onChange",
  })
) as unknown as ComposedCheckbox;

Checkbox.Group = CheckboxGroup;

export default Checkbox;
