/* eslint-disable */
import React from 'react';
import Component from './Dimmer';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * A Dimmer component used most commonly as a modal background.
 * 
 * ** Sub Components **
 * * `DimmerHeader` as `Dimmer.Header`
 * * `DimmerContent` as `Dimmer.Content` 
 * * `DimmerFooter` as `Dimmer.Footer`
 *
 * @composedWith UiWrapper
*/
function Dimmer(props) {
  return <Component {...props} />;
}

export default Dimmer;
