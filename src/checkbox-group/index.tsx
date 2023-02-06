import { connect, mapProps } from "@formily/react";
import { Checkbox as ArcoCheckbox } from "@arco-design/web-react";
const ArcoCheckboxGroup = ArcoCheckbox.Group;

export const CheckboxGroup = connect(
  ArcoCheckboxGroup,
  mapProps({
    dataSource: "options",
  })
);

export default CheckboxGroup;
