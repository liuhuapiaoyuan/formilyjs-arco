var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { connect, mapProps } from "@formily/react";
import { DatePicker as ArcoDatePicker } from "@arco-design/web-react";
export var DatePicker = connect(ArcoDatePicker, mapProps(function (props) {
    var onChange = props.onChange;
    return __assign(__assign({}, props), { onChange: function (dateStr, date) {
            if (onChange) {
                // 这种方式破坏了原有属性
                onChange(dateStr, date);
            }
        } });
}));
export default DatePicker;
//# sourceMappingURL=index.js.map