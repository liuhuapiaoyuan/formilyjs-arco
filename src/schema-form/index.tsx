import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
} from "react";
import { createForm /* , setValidateLanguage */ } from "@formily/core";
import { /* FormConsumer,  */ FormContext, ISchema } from "@formily/react";
import { Form, SchemaRender } from "../index";
import * as componentsBase from "../components";
import * as scopeBase from "./scope";

interface SchemaFormProps {
  schema: ISchema;
  scope?: { [key: string]: any };
  components?: any;
  initialValues?: any;
  [key: string]: any;
}

// setValidateLanguage('zh-CN');

export const SchemaForm = forwardRef((props: SchemaFormProps, ref) => {
  const {
    schema,
    scope = {},
    components = {},
    initialValues,
    ...restProps
  } = props;
  const contextForm = useContext(FormContext);
  const form = useMemo(() => {
    if (contextForm) {
      return contextForm;
    } else {
      return createForm({
        initialValues: Object.entries(initialValues ?? {})
          .filter(([key]) => initialValues[key] !== undefined)
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      });
    }
  }, [initialValues, contextForm]);

  useImperativeHandle(
    ref,
    () => ({
      getForm() {
        return form;
      },
    }),
    [form]
  );
  return (
    <Form form={form} {...restProps}>
      <SchemaRender
        schema={schema}
        scope={{
          ...scopeBase,
          ...scope,
        }}
        components={{
          componentsBase,
          ...components,
        }}
      />
      {props?.children}
      {/* <FormConsumer>
         {() => <div>{JSON.stringify(form.values ?? {})}</div>}
       </FormConsumer> */}
    </Form>
  );
});

export default SchemaForm;
