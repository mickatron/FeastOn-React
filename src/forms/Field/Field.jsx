import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classNameType from 'js/shared/proptypes/className';
import FieldDecorator from '../FieldDecorator/FieldDecorator';

export default class Field extends React.PureComponent {
    
  static propTypes = {
    className: classNameType,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    description: PropTypes.string,
    help: PropTypes.string,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    // showHelp: PropTypes.bool,
    showDescription: PropTypes.bool,
    style: PropTypes.object,
    isValid: PropTypes.shape({
      valid: PropTypes.bool,
      warning: PropTypes.bool,
      info: PropTypes.bool,
    }),
    isValidMessage: PropTypes.string,
  }

  static defaultProps = {
    showDescription: true, 
    isValid: {
      valid: undefined,
    },
  }

  render() {
    const { 
      className, 
      disabled, 
      children,
      description,
      help,
      label,
      showDescription,
      style,
      isRequired,
      isValid,
      isValidMessage,
    } = this.props;
    
    return ( 
      <FieldDecorator
        className={classnames('c-Field', className)}
        disabled={disabled}
        isValid={isValid}
        required={isRequired}
        style={style}
      >
        <label
          className="c-Field__label"
        >{label}</label>
        {help && isValid.info ? <span className="c-Field__help-text">{help}</span> : null}
        {children}
        {description && showDescription ? <span className="c-Field__description">{description}</span> : null}
        {isValid.valid === false ? <p className="c-Field__errorMessage">{isValidMessage}</p> : null }
      </ FieldDecorator>
    );
  }

}
