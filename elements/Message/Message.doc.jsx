/* eslint-disable */
import React from 'react';
import Component from './Message';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * A basic Message device used to render .
 * 
 * ** Sub Components **
 * * `MessageHeader` as `Message.Header`
 * * `MessageContent` as `Message.Content` 
 * * `MessageFooter` as `Message.Footer`
 *
 * @composedWith UiWrapper
*/
function Message(props) {
  return <Component {...props} />;
}

export default Message;
