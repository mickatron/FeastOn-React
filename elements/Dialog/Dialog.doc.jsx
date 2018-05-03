/* eslint-disable */
import React from 'react';
import Component from './Dialog';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * A basic Dialog device used to render .
 * 
 * ** Sub Components **
 * * `DialogHeader` as `Dialog.Header`
 * * `DialogContent` as `Dialog.Content` 
 * * `DialogFooter` as `Dialog.Footer`
 *
 * @composedWith UiWrapper
*/
function Dialog(props) {
  return <Component {...props} />;
}

export default Dialog;
