/* eslint-disable */
import React from 'react';
import Component from './Button';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * Renders a standard `button`.
 * 
 * ** Sub Components **
 * * `ButtonIcon` as `Button.Icon`
 * 
 * @composedWith UiWrapper
*/
function Button(props) {
  return <Component {...props} />;
}
Button.propTypes = {
  /** The type of element to render the component as. */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
  ]),
  /** BEM modifier names to be applied to the elements wrapper.*/
  modifier: PropTypes.oneOfType([
    PropTypes.oneOf([
      'true',
      'warn',
      'false',
      'link',
      'outline',
      'pill',
      'full',
      'zeta',
      'epsilon',
      'gamma',
      'delta',
      'beta',
      'alpha',
    ]),
      PropTypes.arrayOf(PropTypes.oneOf( [
      'true',
      'warn',
      'false',
      'link',
      'outline',
      'pill',
      'full',
      'zeta',
      'epsilon',
      'gamma',
      'delta',
      'beta',
      'alpha',
    ])),
  ]),
};

Button.defaultProps = {
  as: 'button',  
  modifier: undefined,
  width: undefined,
};

export default Button;
