import { connect, mapProps, ReactFC } from "@formily/react";
import { Cascader as ArcoCascader, CascaderProps } from "@arco-design/web-react";

export const Cascader: ReactFC<CascaderProps> = connect(
  ArcoCascader,
  mapProps({ dataSource: "options" })
);

export default Cascader;
