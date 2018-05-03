/* eslint-disable */
import React from 'react';
import Component from './MenuItem';
import PropTypes from 'prop-types';
import asType from '../../../proptypes/as';
import classNameType from '../../../proptypes/className';

/**
 * Renders a standard `MenuItem`.
 * 
 * @composedWith UiWrapper
*/
function MenuItem(props) {
  return <Component {...props} />;
}
MenuItem.propTypes = {
  /** The type of element to render the component as. */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
  ]),
};

MenuItem.defaultProps = {
  as: 'li',
};

export default MenuItem;
