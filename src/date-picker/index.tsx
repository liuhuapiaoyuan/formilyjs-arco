import { connect, mapProps } from "@formily/react";
import { DatePicker as ArcoDatePicker } from "@arco-design/web-react";

export const DatePicker = connect(
  ArcoDatePicker,
  mapProps((props) => {
    const { onChange } = props;
    return {
      ...props,
      onChange: ( dateStr,date) => {
        if (onChange) {
          // 这种方式破坏了原有属性
          onChange(dateStr,date);
        }
      },
    };
  })
);

export default DatePicker;
