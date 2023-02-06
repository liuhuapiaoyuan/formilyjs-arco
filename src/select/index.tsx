import React from "react";
import { connect, mapReadPretty, mapProps } from "@formily/react";
import { Select as ArcoSelect } from "@arco-design/web-react";
import { IconLoading } from "@arco-design/web-react/icon";
import { PreviewText } from "../preview-text";
export const Select = connect(
  ArcoSelect,
  mapProps<any>(
    {
      loading: true,
      dataSource: "options",
    },
    (props, field) => {
      return {
        ...props,
        suffix:
          field?.["loading"] || field?.["validating"] ? (
            <IconLoading />
          ) : (
            props.suffix
          ),
      };
    }
  ),
  mapReadPretty(PreviewText.Select)
);

export default Select;
