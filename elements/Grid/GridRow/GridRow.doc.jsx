/* eslint-disable */
import React from 'react';
import Component from './GridRow';
import PropTypes from 'prop-types';
import asType from '../../../proptypes/as';
import classNameType from '../../../proptypes/className';

/**
 * Renders a standard `GridRow`.
 * 
 * @composedWith UiWrapper
*/
function GridRow(props) {
  return <Component {...props} />;
}
GridRow.propTypes = {
  /** BEM modifier names to be applied to the elements wrapper.*/
  modifier: PropTypes.oneOfType([
    PropTypes.oneOf([
      'noCellGutters',
      'noCellPadding',
    ]),
      PropTypes.arrayOf(PropTypes.oneOf([
      'noCellGutters',
      'noCellPadding',
    ])),
  ]),
};

GridRow.defaultProps = {
  modifier: undefined,
};

export default GridRow;
