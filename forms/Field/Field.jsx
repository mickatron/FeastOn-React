import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

import uiWrapper from '../../HOC/uiWrapper';
import Label from '../Label';
import Message from '../../elements/Message';

import classNameType from 'js/shared/proptypes/className';

class Field extends React.PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    description: PropTypes.string,
    label: PropTypes.shape(label.propTypes),
    required: PropTypes.bool,
    valid: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.node,
    ]),
    invalid: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.node,
    ]),
    info: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.node,
    ]),
    customRender:PropTypes.func,
  }

  static defaultProps = {
    showDescription: true,
  }

  componentWillMount() {
    // generate a unique ID for the component
    // TODO: test and update for isomorphic applications
    this.uid = uniqueId();
  }

  uid = undefined;

  render() {
    const {
      className,
      disabled,
      readOnly,
      description,
      info,
      label,
      // input: {component, ...otherInputProps},
      required,
      invalid,
      customRender,
    } = this.props;
    const uid = this; 
    // TODO: refactor elsewhere
    if (disabled) label.input.disabled = true;
    if (required) label.input.required = true;
    if (readOnly) label.input.readOnly = true;

    return (customRender && customRender(this.props)) || (
      <React.Fragment>
        <Label {...label} for={uid} />
        {description? <span className="c-Field__description">{description}</span> : null}
        {info && ( // TODO: test if it's a react node
          <Message modifier="info">
            {info}
          </Message>
        )}
        {invalid && ( // TODO: test if it's a react node
          <Message modifier="falsy">
            {invalid}
          </Message>
        )}
      </React.Fragment>
    );
  }
}

export default uiWrapper({
  name: 'Field',
  Component: Field,
  element: 'Field',
  modifiers: [
    'disabled',
    'readOnly',
    'required',
    'valid',
    'invalid',
    'warning',
    'info',
  ], 
});
