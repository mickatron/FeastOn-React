/* eslint-disable */
import React from 'react';
import Component from './GridCell';
import PropTypes from 'prop-types';
import asType from '../../../proptypes/as';
import classNameType from '../../../proptypes/className';

/**
 * Renders a standard `GridCell`.
 * 
 * @composedWith UiWrapper
*/
function GridCell(props) {
  return <Component {...props} />;
}
GridCell.propTypes = {
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

GridCell.defaultProps = {
  modifier: undefined,
};

export default GridCell;
