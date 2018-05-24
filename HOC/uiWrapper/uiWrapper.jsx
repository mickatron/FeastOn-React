import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';
import { getWidths } from '../../proptypes/editable/widthProps';
import { getModifiers } from '../../proptypes/editable/modifierProps';

// This function takes a component...
export default function uiWrapperHOC({
  name,
  element = 'div',
  Component,
  blockName = undefined,
  modifiers = [],
}) {
  const modifiersAll = getModifiers(name, modifiers);
  const widths = getWidths();
  const wrapperClassName = blockName || name;
  // ...and returns another component...
  return class UiWrapper extends React.PureComponent {
    static propTypes = {
      aria: PropTypes.object,
      /** The type of element to render the component as. */
      as: asType,
      /** A custom className. */
      className: classNameType,
      /** The Tile components child elements. */
      children: PropTypes.node,
      /** BEM modifier names to be applied to the elements wrapper. */
      modifier: PropTypes.oneOfType([
        PropTypes.oneOf(modifiersAll),
        PropTypes.arrayOf(PropTypes.oneOf(modifiersAll)),
      ]),
      theme: PropTypes.string,
      // TODO: should be renamed: widthClass, span, helpers...
      // width attribute
      /** Width className */
      widthClass: PropTypes.oneOf(widths),
    }

    static defaultProps = {
      as: element,
      className: null,
      children: null,
      modifier: null,
      widthClass: null,
    }
    state = {
      aria: this.props.aria,
    }

    ariaHandler = (newState, merge = true) => {
      const aria = merge ? {...this.state.aria, ...newState} : newState;
      this.setState({aria});
    }

    render() {
      const {
        as,
        className,
        modifier,
        widthClass,
        theme,
        ...other
      } = this.props;
      const { aria } = this.state;
      const Element = as;

      const themeModifier = theme ? `${wrapperClassName}--${theme}` : null;
      // TODO: refactor these elsewhere
      // Modifier classNames
      const modifierClassNames = Array.isArray(modifier)
        ? modifier.map(eachModifier => `${wrapperClassName}--${eachModifier}`)
        : { [`${wrapperClassName}--${modifier}`]: modifier };
      // If one of the wrapped components props has the same name as a modifier set it as a modifier
      Object.keys(other).forEach((prop) => {
        if (modifiers.indexOf(prop) !== -1 && other[prop]) {
          modifierClassNames[`${wrapperClassName}--${prop}`] = true;
        }
      });

      const wrapperProps = {};
      if (Component) {
        const otherKeys = Object.keys(other);
        Object.keys(Component.propTypes).forEach((prop) => {
          if (otherKeys.indexOf(prop) !== -1) {
            wrapperProps[prop] = other[prop];
            delete other[prop];
          }
        });
      }
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <Element
          className={classnames(
            className, 
            wrapperClassName, 
            themeModifier, 
            modifierClassNames, 
            widthClass
          )}
          {...other}
          {...aria}
        >
          { Component
            ? <Component ariaHandler={ariaHandler} {...wrapperProps} />
            : this.props.children
          }
        </Element>
      );
    }
  };
}
