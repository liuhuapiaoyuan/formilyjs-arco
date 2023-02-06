import React from "react";
import { connect, mapProps, mapReadPretty } from "@formily/react";
import { InputNumber as ArcoInputNumber } from "@arco-design/web-react";
import { PreviewText } from "../preview-text";
import { IconLoading } from "@arco-design/web-react/icon";

export const InputNumber = connect(
  ArcoInputNumber,
  mapProps((props, field: any) => {
    return {
      ...props,
      suffix: (
        <span>
          {field?.["loading"] || field?.["validating"] ? (
            <IconLoading />
          ) : (
            props.suffix
          )}
        </span>
      ),
    };
  }),
  mapReadPretty(PreviewText.Input)
) as any;

export const NumberPicker = InputNumber;

export default InputNumber;
