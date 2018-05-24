import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import set from 'lodash/set';

import uiWrapper from '../../HOC/uiWrapper';
// CUSTOM COMPONENTS
import Field from 'js/shared/components/forms/Field/Field';
import classNameType from 'js/shared/proptypes/className';

class FieldGroup extends React.PureComponent {

  static propTypes = {
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        fields: PropTypes.arrayOf(
          PropTypes.shape({
            component: PropTypes.element,
            ...Field.PropTypes,
            width: PropTypes.string,
            validation: PropTypes.arrayOf(PropTypes.shape({
              routine: PropTypes.func,
              message: PropTypes.string,
            })),
          })
        ),
      })
    ),
    onChange: PropTypes.func,
  };

  state = {
    data: this.createStateFromProps(), // TODO: do this on receiveProps to
  }

  createStateFromProps() {
    const stateObj = {};
    const { fields } = this.props;
    const { isValid, errorMessages } = this.validate(field.validation, String(field.value));
    fields.forEach((field) => {
      const fieldDataState = {
        value: field.value || null,
        errorMessages: errorMessages.length > 0 ? errorMessages : null,
        isValid,
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
    const errorMessages = [];
    for (const test in validationObject) {
      const { routine, message } = test;
      const routineValid = routine(value);
      isValid.valid = isValid.valid || routineValid ? true : false;
      isValid.info = !isValid.valid;
      if (isValid.valid) { 
        errorMessage.push(message);
      }
    }
    return { isValid, errorMessages};
  }

  handlers = {
    onChange: (event) => {
      const name = event.target.name;
      const targetData = get(this.state.data, name);
      const { isValid, errorMessages } = this.validate(targetData.validation, event.target.value);

      const data = {
        ...this.state.data,
        [name]: {
          value: event.target.value || null,
          errorMessages: errorMessages.length > 0 ? errorMessages : null,
          isValid,
        },
      };
      this.setState({ data }, () => {
        const { onChange } = this.props;
        if (onChange) onChange(event, { updated: { [name]: {...this.state.data[name]} }, data });
      });
    },
  }

  render() {
    const { fields } = this.props;
    return (
      <React.Fragment>
        {fields.map((field) => this.renderField(field))}
      </React.Fragment>
    );
  }

  renderField(fieldData) {
    const { component, width, validations, ...otherProps } = this.fieldData;
    const stateData = this.state.data[fieldData.name];
    fieldData.input.onChange = this.handlers.onChange;
    return (
      <Field
        className="l-Grid__cell"
        {...otherProps}
        isValid={stateData.isValid}
        value={stateData.value}
      />
    );
  }
}

export default uiWrapper({
  name: 'FieldGroup',
  Component: FieldGroup,
  element: 'FieldGroup',
});
