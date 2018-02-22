import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

import capitalizeFirstLetter from 'js/shared/util/capitalizeFirstLetter';

export default class HtmlInput extends React.PureComponent {

  static propTypes = {
    className: classNameType,
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
    ]).isRequired,
  }

  render() {
    const {
      className,
      type,
      ...other
    } = this.props;

    return (
      <input
        className={classnames(className, `c-${capitalizeFirstLetter(type)}Input`)}
        type={type}
        { ...other }
      />
    ); 
  }
}
  