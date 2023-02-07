import { connect, mapProps } from "@formily/react";
import { Transfer as ArcoTransfer } from "@arco-design/web-react";
export var Transfer = connect(ArcoTransfer, mapProps({
    value: true,
    dataSource: true,
}));
export default Transfer;
//# sourceMappingURL=index.js.map