/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * The `uiWrapper` function is a Higher Order Component(HOC) that composes some default 
 * functionality and `PropTypes` for a components HTML wrapper element. 
 * 
 * ** Features **
 * * Wrapper element can be changed to any valid HTMl element or React Class.
 * * Custom classNames can be passed in as a string, array or Object in `classnames` module format. 
 * * Props that are not handled by the `uiWrapper` or the component it wraps are spread as
 * JSX props on the `uiWrapper` element, allowing you to set attributes on the wrapper.
 * * BEM modifiers can be applied. the PropTypes values can also be customized.
 * * If a prop passed to the Wrapped Component matches a modifier, the modifier will be applied.
*/
function uiWrapper(props) {
  return <React.Fragment />;
}

uiWrapper.propTypes = {
  /** Allows dynamic rendering of the wrapper element. */
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
  ]),
  /** A custom className. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /** The Tile components child elements. */
  children: PropTypes.node.isRequired,
  /** BEM modifier names to be applied to the elements wrapper.*/
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Width className */
  width: PropTypes.oneOf([
    'one-quarter',
    'one-third',
    'one-half',
    'two-thirds',
    'three-quarters',
    'one-whole',
  ]),
};

uiWrapper.defaultProps = {
  as: 'uiWrapper',
  className: undefined,
  modifier: undefined,
  width: undefined,
};

export default uiWrapper;
