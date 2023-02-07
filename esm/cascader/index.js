import { connect, mapProps } from "@formily/react";
import { Cascader as ArcoCascader } from "@arco-design/web-react";
export var Cascader = connect(ArcoCascader, mapProps({ dataSource: "options" }));
export default Cascader;
//# sourceMappingURL=index.js.map