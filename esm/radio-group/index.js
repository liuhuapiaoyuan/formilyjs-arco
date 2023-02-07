import { connect, mapProps } from "@formily/react";
import { Radio as ArcoRadio } from "@arco-design/web-react";
var ArcoRadioGroup = ArcoRadio.Group;
export var RadioGroup = connect(ArcoRadioGroup, mapProps({
    dataSource: "options",
}));
export default RadioGroup;
//# sourceMappingURL=index.js.map