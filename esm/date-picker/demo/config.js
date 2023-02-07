var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var config = {
    type: 'object',
    properties: {
        datePicker: {
            type: 'string',
            title: '日期选择',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker',
            'x-component-props': {
                onChange: function () {
                    var p = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        p[_i] = arguments[_i];
                    }
                    console.log.apply(console, __spreadArray(['datepicker onChange: '], __read(p), false));
                },
            },
        },
        dateTimePicker: {
            type: 'string',
            title: '时间日期选择',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker',
            'x-component-props': {
                type: 'dateTime',
            },
        },
        dateRangePicker: {
            type: 'string',
            title: '日期范围选择',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker',
            'x-component-props': {
                type: 'dateRange',
            },
        },
        dateTimeRangePicker: {
            type: 'string',
            title: '时间日期范围选择',
            'x-decorator': 'FormItem',
            'x-component': 'DatePicker',
            'x-component-props': {
                type: 'dateTimeRange',
            },
        },
    },
};
export default config;
//# sourceMappingURL=config.js.map