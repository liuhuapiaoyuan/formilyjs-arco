import React from "react";
import { Card, Form } from "@arco-design/web-react";
import { useFieldSchema, observer, RecursionField } from "@formily/react";
import { Schema, SchemaKey } from "@formily/json-schema";

export const Section = observer((props) => {
  const fieldSchema = useFieldSchema();
  const items: { name: SchemaKey; schema: Schema }[] = [];

  // 获取 properties 里子元素配置，并在下面渲染
  fieldSchema.mapProperties((schema, name) => {
    items.push({
      name,
      schema,
    });
  });

  return (
    <Card bordered={false} bodyStyle={{padding:0}} size="small"  {...props}>
      {items.map(({ schema, name }, index) => (
        <RecursionField
          schema={schema}
          name={name}
          key={name.toString() + index}
        />
      ))}
    </Card>
  );
});

export default Section;
