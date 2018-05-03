/* eslint-disable */
import React from 'react';
import Component from './Menu';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * Renders a standard `Menu`.
 * 
 * ** Sub Components **
 * * `MenuItem` as `Menu.Item`
 *
 * @composedWith UiWrapper
*/
function Menu(props) {
  return <Component {...props} />;
}
Menu.propTypes = {
  /** The type of element to render the component as. */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
  ]),
};

Menu.defaultProps = {
  as: 'ul',
};

export default Menu;
