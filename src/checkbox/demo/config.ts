const addOptions = field => {
  setTimeout(() => {
    field.dataSource = ['Photography', 'Movies', 'Running'];
  }, 10);
};

const config = {
  type: 'object',
  properties: {
    checkbox: {
      type: 'string',
      title: 'checkbox',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      'x-content': 'apple',
    },
    checkboxGroup1: {
      type: 'string',
      title: 'checkboxGroup',
      'x-decorator': 'FormItem',
      'x-component': 'CheckboxGroup',
      'enum': ['Photography', 'Movies', 'Running'],
      'x-component-props': {},
    },
    checkboxGroup: {
      type: 'string',
      title: '动态checkboxGroup',
      'x-decorator': 'FormItem',
      'x-component': 'CheckboxGroup',
      'x-component-props': {},
      'x-reactions': [addOptions],
    },
  },
};

export default config;
