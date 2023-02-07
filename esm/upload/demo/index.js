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
import React, { useState } from 'react';
import { Reset, Upload, FormItem } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormConsumer, Field, FormProvider } from '@formily/react';
import { Input, Typography } from '@arco-design/web-react';
var form = createForm({
    initialValues: {
        input: 'sadsa',
        upload: [
            {
                name: 'temp.png',
                url: 'https://secure.gravatar.com/avatar/b0de023b7c0d631fe1c283d0389cd72c?s=800&d=identicon',
            },
        ],
    },
});
var NormalUpload = function (props) {
    console.log('normal upload: ', props.fileList, props);
    return React.createElement(Upload, __assign({}, props));
};
var Demo = function () {
    var _a = __read(useState(''), 2), a = _a[0], seta = _a[1];
    return (React.createElement(FormProvider, { form: form },
        React.createElement(Input, { value: a, onChange: seta }),
        React.createElement("div", null, a),
        React.createElement(Field, { name: "input", component: [
                Input,
                {
                    placeholder: '请输入',
                    allowClear: true,
                },
            ] }),
        React.createElement(Field, { name: "upload", title: "\u4E0A\u4F20", required: true, decorator: [FormItem], component: [
                NormalUpload,
                {
                    onChange: function () {
                        var p = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            p[_i] = arguments[_i];
                        }
                        return console.log.apply(console, __spreadArray(['upload onChange: '], __read(p), false));
                    },
                    action: 'https://arco.design/api/upload',
                },
            ] }),
        React.createElement(Field, { name: "images", title: "\u4F20\u56FE", required: true, decorator: [FormItem], component: [
                Upload,
                {
                    listType: 'picture-card',
                    accept: 'image/*',
                    onChange: function () {
                        var p = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            p[_i] = arguments[_i];
                        }
                        return console.log.apply(console, __spreadArray(['upload onChange: '], __read(p), false));
                    },
                    action: 'https://arco.design/api/upload',
                },
            ] }),
        React.createElement(Reset, null, "Reset"),
        React.createElement(FormConsumer, null, function () { return (React.createElement(Typography.Text, { code: true }, JSON.stringify(form.values))); })));
};
export default Demo;
//# sourceMappingURL=index.js.map