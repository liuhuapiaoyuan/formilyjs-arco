import { connect, mapProps } from "@formily/react";
import { Radio as ArcoRadio } from "@arco-design/web-react";
import RadioGroup from "../radio-group";
export var Radio = connect(ArcoRadio, mapProps({
    value: "checked",
    onInput: "onChange",
}));
Radio.Group = RadioGroup;
export default Radio;
//# sourceMappingURL=index.js.map