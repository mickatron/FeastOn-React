/* eslint-disable */
import React from 'react';
import Component from './ButtonIcon';
import PropTypes from 'prop-types';
import asType from '../../../proptypes/as';

/**
 * A `ButtonIcon` is a wrapper to allow consistent icon style and functionality.
 * 
 * @composedWith UiWrapper
*/
function ButtonIcon(props) {
  return <Component {...props} />;
}
ButtonIcon.propTypes = {
  /** The type of element to render the component as. */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
  ]),
};

ButtonIcon.defaultProps = {
  as: 'span',
};

export default ButtonIcon;
