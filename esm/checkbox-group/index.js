import { connect, mapProps } from "@formily/react";
import { Checkbox as ArcoCheckbox } from "@arco-design/web-react";
var ArcoCheckboxGroup = ArcoCheckbox.Group;
export var CheckboxGroup = connect(ArcoCheckboxGroup, mapProps({
    dataSource: "options",
}));
export default CheckboxGroup;
//# sourceMappingURL=index.js.map