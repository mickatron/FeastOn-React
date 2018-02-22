import ChevronIcon from 'react-material-icon-svg/dist/ChevronLeftIcon';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classNameType from 'js/shared/proptypes/className';
import Button from 'js/shared/components/ui/Button/Button';

import normalizeEventName from 'js/shared/util/normalizeEventName';

export default class ContentToggle extends React.PureComponent {

  classPrefix = 'c-ContentToggle'; 
  static propTypes = {
    children: PropTypes.node,
    className: classNameType,
    disabled: PropTypes.bool,
    header: PropTypes.node.isRequired,
    mode: PropTypes.oneOf([
      'accordion',
      'dropDown',
    ]),
    open: PropTypes.bool,
    Icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.instanceOf(null),
    ]),
    iconPos: PropTypes.oneOf([ 'right', 'left' ]),
    triggerEvent:PropTypes.oneOf([
      'onClick',
      'onMouseEnter',
    ]),
    exitEvent: PropTypes.oneOf([
      'onClick',
      'onMouseLeave',
    ]),
  }

  static defaultProps = {
    disabled: false,
    Icon: ChevronIcon,
    iconPos: 'right',
    mode: 'accordion',
    open: false,
    triggerEvent: 'onClick', 
    exitEvent: 'onClick',
  }

  state = {
    open: this.props.open,
  }

  onClickHandler = (event) => {
    if (this.props.disabled) return;
    const open = this.state.open;
    const type = event.type;

    if(
      (!open && type === normalizeEventName(this.props.triggerEvent))
      || 
      (open && type === normalizeEventName(this.props.exitEvent))
    ) {
      this.setState({ open: !open });
    }
    return;
  }

  render() {
    const {
      children,
      className,
      disabled,
      header,
      Icon,
      iconPos,
      mode,
      exitEvent,
      triggerEvent,
    } = this.props;

    const extraClassNames = {
      [`${this.classPrefix}--open`]: this.state.open,
      [`${this.classPrefix}--disabled`] : disabled,
    };

    return (
      <div 
        className={
          classnames(
            className, 
            this.classPrefix, 
            `${this.classPrefix}--${mode}`, 
            extraClassNames,
          )}
        {...{ [triggerEvent]: this.onClickHandler }}
        {...{ [exitEvent]: this.onClickHandler }}
      >
        <Button 
          appearance="link" 
          className={`${this.classPrefix}__header`} 
        >
          {iconPos === 'left' && Icon ? <Icon className={`${this.classPrefix}__icon`} /> : null }
          {header}
          {iconPos === 'right' && Icon ? <Icon className={`${this.classPrefix}__icon`} /> : null }
        </Button>
        <div className={`${this.classPrefix}__content`}>
          {children}
        </div>
      </div>
    );
  }
}