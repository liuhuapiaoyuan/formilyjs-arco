import React from 'react';
import { Form, SchemaRender, Reset } from '@formily/arco';
import { createForm } from '@formily/core';
import { FormConsumer } from '@formily/react';
import config from './config';
var form = createForm({});
var Demo = function () { return (React.createElement(Form, { form: form },
    React.createElement(SchemaRender, { schema: config }),
    React.createElement(Reset, null, "Reset"),
    React.createElement(FormConsumer, null, function () { return React.createElement("div", null, JSON.stringify(form.values)); }))); };
export default Demo;
//# sourceMappingURL=index.js.map