import { connect, mapProps } from "@formily/react";
import { Upload as ArcoUpload } from "@arco-design/web-react";

export const Upload = connect(
  ArcoUpload,
  mapProps(
    {
      value:"fileList"
    },
    ({ ...reset}) => {
      return {
        ...reset,
      };
    }
  ) 
);

export default Upload;
