# @formily/arco

> Formily Component Adaptor

# Doc

https://semi.formilyjs.org/

# Quick Start

**Strongly recommend to read [Formily Doc](https://v2.formilyjs.org/) first**

## Install

```bash
npm install @formily/arco --save
```

necessary peerDependencies：

```bash
$ npm i -S @formily/core @formily/react @arco-design/web-react
```

## Start

```typescript
import React, { useCallback } from "react";
import { SchemaForm } from "@formily/arco";
import { ISchema } from "@formily/json-schema";
import { useRef } from "react";
import { Button } from "@arco-design/web-react";

const schema = {
  type: "object",
  properties: {
    select: {
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-reactions": "{{useAsyncDataSource(loadData)}}",
    },
  },
} as ISchema;

const scope = {
  async loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            label: "CCC",
            value: "ccc",
          },
          {
            label: "DDD",
            value: "ddd",
          },
        ]);
      }, 1000);
    });
  },
};

export default () => {
  const formRef = useRef<any>();
  const handleClick = useCallback(() => {
    console.log(formRef?.current?.getForm()?.values);
  }, []);
  return (
    <div className="wrap">
      <SchemaForm ref={formRef} schema={schema} scope={scope} />
      <Button onClick={handleClick}>点击测试</Button>
    </div>
  );
};
```

# Intro

Based on [formily/v2](https://v2.formilyjs.org/)
with UI library [arco-design](https://arco.design/)

Coding like [@formily/ant](https://github.com/alibaba/formily/tree/formily_next/packages/antd)

# ISSUE

pls submit bugs to: [issue](https://github.com/formilyjs/semi/issues)
