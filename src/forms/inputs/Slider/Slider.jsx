import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import debounce from 'lodash/debounce';

import classNameType from '../../../../proptypes/className';
import dimension from 'js-lib/dimension';

import Drag from '../../../ui/Drag/Drag';

export default class Slider extends React.PureComponent {

  static propTypes = {
    as: PropTypes.string,
    className: classNameType,
    orientation: PropTypes.oneOf([
      'horizontal',
      'vertical',
    ]),
    type: PropTypes.oneOf([
      'standard',
      'range',
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),
    values: PropTypes.oneOfType([ 
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
      PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
      }),
    ]).isRequired,
    divisions: PropTypes.number,
  }

  static defaultProps = {
    as: 'div',
    className: undefined,
    orientation: 'horizontal',
    type: 'standard',
    value: 0,
    divisions: 10,
  }

  state = {
    value: this.props.value,
    isMounted: false,
  }

  $button = undefined;
  buttonWidth = undefined;

  $track = undefined;
  trackWidth = undefined;
  trackTick = undefined;

  componentDidMount() {
    this.setState({isMounted: true});
  }

  componentDidUpdate() {
    console.log('didRender');
    if (this.state.isMounted) {
      // get the button width
      this.buttonWidth = dimension(this.$button, 'width', true);

      // get the track width
      this.trackWidth = dimension(this.$track, 'width') - (this.buttonWidth);
      this.trackTick = this.trackWidth / 100;
    };
  }

  handlers = {
    onStopDrag: (event) => {
      const { onStopDrag } = this.props;
      if (onStopDrag) onStopDrag(event);
    },
    onChange: (event) => {
      const { trackTick } = this;
      const { onChange } = this.props;
      const value = parseInt(event.xCoord / trackTick, 10);
      if (onChange) onChange({ ...event, value });
      console.log(parseInt(event.xCoord/ trackTick, 10));
    },
    onStartDrag: (event) => {
      const { onStartDrag } = this.props;
      if (onStartDrag) onStartDrag(event);
    }, 
  }


  render() {
    const { as, className } = this.props;
    const { onChange, onStopDrag, onStartDrag } = this.handlers;
    const Element = as;
    return (
      <Element
        className={classnames(className, 'c-Slider')}
      >


        <div  
          className="c-Slider__track"
          ref={$track => this.$track = $track}
        >
          {  this.state.isMounted  && 
            <Drag
              confinedTo={this.$track} 
              onStopDrag={onStopDrag}
              onStartDrag={onStartDrag}
              onDrag={onChange}
            >
              <button 
                className="c-Slider__button"
                ref={button => this.$button = button}
              >
              </button>
            </Drag>
          }
        </div>

      </Element>
    );
  }
}