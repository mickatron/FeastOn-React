/* eslint-disable */
import React from 'react';
import Component from './Select';
import PropTypes from 'prop-types';

import classNameType from '../../../proptypes/className';

/**
 * A Select.
 *
 * 
 * @composedWith UiWrapper
*/
function Select(props) {
  return <Component {...props} />;
}

Select.propTypes = {
  /** Options to be rendered by the Select component. */
  options: PropTypes.arrayOf(PropTypes.shape({
    className: classNameType,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  /** The selected option value of the Select component. */
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
}

export default Select;
