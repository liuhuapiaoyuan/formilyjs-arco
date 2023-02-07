import { connect, mapProps } from '@formily/react';
import { Checkbox as ArcoCheckbox } from '@arco-design/web-react';
import CheckboxGroup from '../checkbox-group';
export var Checkbox = connect(ArcoCheckbox, mapProps({
    value: 'checked',
    onInput: 'onChange',
}));
Checkbox.Group = CheckboxGroup;
export default Checkbox;
//# sourceMappingURL=index.js.map