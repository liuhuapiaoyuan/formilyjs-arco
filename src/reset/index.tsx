import React from "react";
import { Button } from "@arco-design/web-react";
import { ButtonProps } from "@arco-design/web-react/es/button";
import { useForm } from "@formily/react";
import { IFieldResetOptions } from "@formily/core";

type ResetProps = IFieldResetOptions & ButtonProps;

export const Reset: React.FC<ResetProps> = ({
  forceClear,
  validate,
  ...props
}) => {
  const form = useForm();
  return (
    <Button
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
        form.reset("*", {
          forceClear,
          validate,
        });
      }}
    />
  );
};

export default Reset;
