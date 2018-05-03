import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from '../../../proptypes/className';
import { getModifiers } from '../../../proptypes/editable/modifierProps';
import { getWidths } from '../../../proptypes/editable/widthProps';

import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';

const widths = getWidths();
const modifiersAll = getModifiers('HtmlInput', []);

/**
 * Renders an `input`.
 *
 * This component is not composed by the `uiWrapper` HOC, though it does have a similar modifier
 * and width prop.
 */
export default class HtmlInput extends React.PureComponent {
  static propTypes = {
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
      PropTypes.oneOf(modifiersAll),
      PropTypes.arrayOf(PropTypes.oneOf(modifiersAll)),
    ]),
    /** Width className */
    widthClass: PropTypes.oneOf(widths),
  }

  static defaultProps = {
    className: undefined,
    modifier: undefined,
    type: 'text',
    widthClass: undefined,
  }

  render() {
    const {
      className,
      modifier,
      type,
      widthClass,
      ...other
    } = this.props;

    const modifierClassNames = Array.isArray(modifier)
      ? modifier.map(eachModifier => `Input--${eachModifier}`)
      : { [`Input--${modifier}`]: modifier };

    return (
      <input
        className={classnames(
          className,
          `Input Input-${capitalizeFirstLetter(type)}`,
          modifierClassNames,
          widthClass,
        )}
        type={type}
        {...other}
      />
    );
  }
}
