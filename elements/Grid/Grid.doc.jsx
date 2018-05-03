/* eslint-disable */
import React from 'react';
import Component from './Grid';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * A basic Grid device used to implement layout.
 *
 * ** Sub Components **
 * * `GridRow` as `Grid.Row`
 * * `GridCell` as `Grid.Cell`
 * 
 * @composedWith UiWrapper
*/
function Grid(props) {
  return <Component {...props} />;
}
Grid.propTypes = {
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

Grid.defaultProps = {
  modifier: undefined,
};

export default Grid;
