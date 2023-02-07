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
import React from "react";
import { Card } from "@arco-design/web-react";
import { useFieldSchema, observer, RecursionField } from "@formily/react";
export var Section = observer(function (props) {
    var fieldSchema = useFieldSchema();
    var items = [];
    // 获取 properties 里子元素配置，并在下面渲染
    fieldSchema.mapProperties(function (schema, name) {
        items.push({
            name: name,
            schema: schema,
        });
    });
    return (React.createElement(Card, __assign({ bordered: false, bodyStyle: { padding: 0 }, size: "small" }, props), items.map(function (_a, index) {
        var schema = _a.schema, name = _a.name;
        return (React.createElement(RecursionField, { schema: schema, name: name, key: name.toString() + index }));
    })));
});
export default Section;
//# sourceMappingURL=index.js.map