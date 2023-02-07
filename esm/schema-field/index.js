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
import React from 'react';
import { createSchemaField } from '@formily/react';
import * as components from '../components';
export var SchemaField = createSchemaField({
    components: components,
});
// 为了解决 d.js 类型校验错误的问题
export var SchemaRender = function (args) { return React.createElement(SchemaField, __assign({}, args)); };
export default SchemaRender;
//# sourceMappingURL=index.js.map