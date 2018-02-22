import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

import dimension from 'js/shared/util/dimension';

export default class ToolTip extends React.PureComponent {

  static propTypes = {
    active: PropTypes.bool,
    className: classNameType,
    children: PropTypes.node.isRequired,
    offset: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
    }),
    position: PropTypes.shape({
      left: PropTypes.string.oneOf(['left', 'right', 'center']),
      top: PropTypes.string.oneOf(['bottom', 'top', 'center']),
    }),
    height: PropTypes.number,
    width: PropTypes.number,
  }

  static defautProps = {
    active: false,
  }

  state = {
    active: this.props.active,
    position: { 
      horizontal: 'center', 
      vertical: 'bottom', 
    },
  }

  tooltipReference = undefined
  tooltipWrapperReference = undefined
  viewportOffset = undefined
  tooltipWrapperReferenceDimensions = undefined

  postionTip() {
    const { 
      tooltipWrapperReference,
    } = this;
    let { 
      tooltipWrapperReferenceDimensions, 
      viewportOffset,
    } = this;

    viewportOffset = tooltipWrapperReference.getBoundingClientRect();
    tooltipWrapperReferenceDimensions = dimension(tooltipWrapperReference);
    console.log(viewportOffset);

    if(viewportOffset.left >= 0 && viewportOffset.top >= 0) {

    }
    // this.setState(tipPosition);
  }

  listener = false

  toggleListeners(onOrOff) {
    let { listener } = this;
    if (listener !== false && onOrOff !== 'off') {
      listener = window.addEventListener('scroll', this.handlers.onScroll);
    } else if (listener === true && onOrOff !== 'on') {
      window.removeEventListener(this.handlers.onScroll);
      listener = false;
    }
  }

  handlers = {
    onScroll: (event)=>{
      this.postionTip();
    },
  };

  render() {
    const { className, children } = this.props;
    const { active } = this.state;

    // listen to onScroll event
    if (active) this.toggleListeners('on');

    return (
      <div 
        className={classnames(className, 'c-ToolTip')} 
        ref={(wrapper) => { 
          this.tooltipWrapperReference = wrapper; 
          this.viewportOffset = wrapper.getBoundingClientRect();
        }} 
      >
        {children}
        { 
          active ? (
            <div
              className={classnames(className, 'c-ToolTip-tip')}
              ref={(tooltip) => { this.tooltipReference = tooltip; }}
            >
            </div>
          ) : 
            null 
        }
      </div>
    );
  }
}