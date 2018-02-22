import React from 'react';
import classnames from 'classnames';
import get from 'lodash/get';
import set from 'lodash/set';

// VALIDATIONS
import contains from 'validator/lib/contains';
import equals from 'validator/lib/equals';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import isURL from 'validator/lib/isURL';

// CUSTOM COMPONENTS
import FieldGroupProps from './FieldGroup.props';
import Field from 'js/shared/components/forms/Field/Field';
import * as FormInputs from 'js/shared/components/forms/inputs/FormInputs';

const validators = { contains, equals, isEmail, isLength, isURL };

export default class FieldGroup extends React.PureComponent {

  static propTypes = FieldGroupProps

  state = {
    data: this.createStateFromProps(),
  }

  hasRendered = false;

  componentDidMount() {
    this.hasRendered = true;
  }
  componentDidUpdate() {
    this.hasRendered = true;
  }
  componentWillReceiveProps() {
    this.hasRendered = false;
  }

  createStateFromProps() {
    const stateObj = {};
    const { fields } = this.props;

    fields.forEach((field) => {
      const fieldDataState = {
        value: field.value || '',
        isValid: this.validate(field.validation, String(field.value)),
        field: field,
      };
      set(stateObj, field.name, fieldDataState);
    });
    return stateObj;
  }

  validate(validationObject, value) {
    const isValid = {
      valid: false,
      info: false,
    };
    for (const routine in validationObject) {
      const routineValid = validators[routine](value, validationObject[routine] || undefined);
      isValid.valid = routineValid;
      isValid.info = !routineValid;
      if (!routineValid) break;
    }
    return isValid;
  }

  handlers = {
    onChange: (event) => {
      const name = event.target.name;
      const targetdata = get(this.state.data, name);
      const valid = this.validate(targetdata.field.validation, event.target.value);

      const data = {
        ...this.state.data,
        [name]: {
          ...this.state.data[name],
          value: event.target.value || '',
          isValid: valid,
        },
      };
      this.setState({ data }, () => {
        const { onChange } = this.props;
        if (onChange) onChange(event, data);
      });
    },
  }

  render() {
    const { columns, className, fields } = this.props;
    return (
      <div className={classnames(className, 'c-FieldGroup', 'l-Grid', { [`l-Grid--col${columns}`]: columns })}>
        {fields.map((field) => this.renderField(field))}
      </div>
    );
  }

  renderField(fieldData) {
    const { data } = this.state;
    const stateData = data[fieldData.name];
    // define Form Components that will be used dynamically
    const InputToRender = FormInputs[fieldData.input.type];

    // console.log(this.hasRendered, stateData.value, fieldData);

    return (
      <Field
        className="l-Grid__cell"
        key={fieldData.label + '_' + fieldData.name}
        help={fieldData.help}
        label={fieldData.label}
        isValid={stateData.isValid}
        isRequired={fieldData.required}
        isValidMessage={fieldData.isValidMessage}
      >
        <InputToRender
          name={fieldData.name}
          placeholder={fieldData.input.placeholder}
          onChange={this.handlers.onChange}
          value={(this.hasRendered ? stateData.value : fieldData.value) || ''}
          required={fieldData.required} 
          {...fieldData.input.props}
        />
      </Field>
    );
  }
}