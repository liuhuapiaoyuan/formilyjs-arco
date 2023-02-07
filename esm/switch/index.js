import { Switch as ArcoSwitch } from "@arco-design/web-react";
import { connect, mapProps } from "@formily/react";
export var Switch = connect(ArcoSwitch, mapProps({
    value: "checked",
}));
export default Switch;
//# sourceMappingURL=index.js.map