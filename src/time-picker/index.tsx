import { connect, mapProps } from "@formily/react";
import { TimePicker as ArcoTimePicker } from "@arco-design/web-react";

export const TimePicker = connect(
  ArcoTimePicker,
  mapProps((props) => {
    const { onChange } = props;
    return {
      ...props,
      onChange: (time, timeStr: any) => {
        if (onChange) {
          onChange(timeStr, timeStr);
        }
      },
    };
  })
);

export default TimePicker;
