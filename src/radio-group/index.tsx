import { connect, mapProps } from "@formily/react";
import { Radio as ArcoRadio } from "@arco-design/web-react";

const ArcoRadioGroup = ArcoRadio.Group;
export const RadioGroup = connect(
  ArcoRadioGroup,
  mapProps({
    dataSource: "options",
  })
);

export default RadioGroup;
