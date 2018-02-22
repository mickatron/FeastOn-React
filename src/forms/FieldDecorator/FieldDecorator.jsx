import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classNameType from 'js/shared/proptypes/className';


export default class FieldDecorator extends React.PureComponent  {
  
  static propTypes = {
    className: classNameType,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    isValid: PropTypes.shape({
      valid: PropTypes.bool,
      warning: PropTypes.bool,
      info: PropTypes.bool,
    }),
  };
  static defaultProps = {
    isValid: {
      valid: undefined,
      warning: undefined,
      info: undefined,
    },
  };
  
  render() {
    const { className, 
      children, 
      disabled, 
      readOnly, 
      required, 
      style,
      isValid, 
    } = this.props;

    return (
      <div style={style} className={ classnames(className, {
        'f-FieldDecorator--disabled': disabled,
        'f-FieldDecorator--readOnly': readOnly,
        'f-FieldDecorator--required': required,
        'f-FieldDecorator--valid': isValid.valid === true,
        'f-FieldDecorator--invalid': isValid.valid === false,
        'f-FieldDecorator--warning': !isValid.warning,
        'f-FieldDecorator--info': !isValid.info,
      })}>
        {children}
      </div>
    );
  };
}