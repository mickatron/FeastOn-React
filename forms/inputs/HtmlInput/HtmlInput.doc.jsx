/* eslint-disable */
import React from 'react';
import Component from './HtmlInput';
import PropTypes from 'prop-types';

import classNameType from '../../../proptypes/className';
/**
 * Renders an `input`.
 *
 * This component is not composed by the `uiWrapper` HOC, though it does have a similar modifier
 * and width prop.
 */
function HtmlInput(props) {
  return <Component {...props} />;
}
HtmlInput.propTypes = {
  /** A custom className */
  className: classNameType,
  /** The type of input you wish to render. Must be a valid HTML input element type. */
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'file',
    'hidden',
    'image',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'tel',
    'text',
    'time',
    'url',
  ]),
  /** BEM modifier names to be applied to the elements wrapper. */
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Width className */
  widthClass: PropTypes.string,
}

HtmlInput.defaultProps = {
  className: undefined,
  modifier: undefined,
  type: 'text',
  width: undefined,
}
export default HtmlInput;
