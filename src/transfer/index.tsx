import { connect, mapProps } from "@formily/react";
import { Transfer as ArcoTransfer } from "@arco-design/web-react";

export const Transfer = connect(
  ArcoTransfer,
  mapProps({
    value: true,
    dataSource: true,
  })
);

export default Transfer;
