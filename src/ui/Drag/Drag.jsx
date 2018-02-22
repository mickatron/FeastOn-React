import './Drag.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from '../../../proptypes/className';
import dimension from 'js-lib/dimension';
import offset from 'js-lib/offset';

export default class Drag extends React.PureComponent {

  static propTypes = {
    as: PropTypes.string,
    className: classNameType,
    children: PropTypes.node,
    confinedTo: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),
    datum: PropTypes.arrayOf(PropTypes.string),
    handles: PropTypes.arrayOf(PropTypes.node), // references, but will they be created yet? 
    xAxis: PropTypes.bool,
    yAxis: PropTypes.bool,
    limits: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    onDrag: PropTypes.func,
    onStopDrag: PropTypes.func,
    onStartDrag: PropTypes.func,

  }

  static defaultProps = {
    as: 'span',
    datum: ['0px', '0px'],
    xAxis: true,
    yAxis: true,
    limits: {},
  }

  $doc;
  $this;
  relativeClickCoords;
  originalOffset;
  xCoord = undefined;
  yCoord = undefined;
  confines = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  }
  datumPx = [undefined, undefined];

  componentDidMount() {
    this.$doc = document;
  }

  componentWillUnmount() {
    const { $this, $doc } = this;
    const { mouseMove, mouseUp } = this.handlers;
    $this.removeEventListener('mouseup', mouseUp);
    $doc.removeEventListener('mouseup', mouseUp);
    $doc.removeEventListener('mousemove', mouseMove);
    this.toggleMouseDownHandlers('removeEventListener');
  }

  // TODO: revise this
  getRelativeCoords(x, y, $target) {
    const targetOffset = offset($target);
    return {
      x: x - targetOffset.left,
      y: y - targetOffset.top,
    };
  }

  drag(xPos, yPos) {
    const { 
      confines,
      originalOffset, 
      relativeClickCoords, 
    } = this;

    const {
      limits, 
      xAxis,
      yAxis, 
    } = this.props;

    const didDrag = {
      x: false,
      y: false,
    };

    if (yAxis) {
      let tempyCoord = yPos - relativeClickCoords.y;
      if ((!limits.bottom || tempyCoord <= limits.bottom + originalOffset.top) &&
          (!limits.top || tempyCoord >= limits.top - originalOffset.top)) {
        // drag is within given pixel limits
        if ((!confines.top && !confines.bottom) ||
          (tempyCoord >= confines.top && tempyCoord <= confines.bottom)) {
          // within confine limits
          // easier and I imagine quicker than re-rendering in react
          didDrag.y = true;
        } else if (tempyCoord <= confines.top &&
          (typeof confines.top !== 'undefined' &&
            this.xCoord > confines.top)) {
          // outside of top confine limit
          tempyCoord = confines.top;
          didDrag.y = true;
        } else if (tempyCoord >= confines.bottom &&
          (confines.bottom && this.xCoord < confines.bottom)) {
          // outside of bottom confine limit
          tempyCoord = confines.bottom;
          didDrag.y = true;
        }
        if (didDrag.y) {
          this.xCoord = tempyCoord;
          this.$this.style.top = tempyCoord + 'px';
        };
      }
    }

    if (xAxis) {
      let tempxCoord = xPos - relativeClickCoords.x;
      if ((!limits.left || tempxCoord >= limits.left + originalOffset.left) &&
        (!limits.right || tempxCoord <= limits.right - originalOffset.left)) {
        // drag is within given pixel limits
        if ((!confines.left && !confines.right) ||
            (tempxCoord >= confines.left && tempxCoord <= confines.right)) {
          // within confines limits
          // easier and I imagine quicker than re-rendering in react
          didDrag.x = true;
        } else if (tempxCoord <= confines.left && 
            (typeof confines.left !== 'undefined' && 
            this.xCoord > confines.left)) {
          // outside of left confine limit
          tempxCoord = confines.left;
          didDrag.x = true;
        } else if (tempxCoord >= confines.right && 
            (confines.right && this.xCoord < confines.right)) {
          // outside of right confine limit
          tempxCoord = confines.right;
          didDrag.x = true;
        }
        if (didDrag.x) { 
          this.xCoord = tempxCoord;
          this.$this.style.left = tempxCoord + 'px';
        };
      }
    }

    if (didDrag.x || didDrag.y) {
      return {
        yCoord: this.yCoord,
        xCoord: this.xCoord,
      };
    } else {
      return;
    }
  }

  pxOrPercentToInt(pxOrPercentValue, percentOf) {
    if (pxOrPercentValue.indexOf('%') !== -1) {
      const value = parseInt(pxOrPercentValue.replace('%'), 10);
      // calulate percent
      return Math.floor((value / 100) * percentOf);
    } else {
      return parseInt(pxOrPercentValue, 10);
    }
  }
  
  setDatumAndConfines(datumIndex, dimension) {
    const { confines, datumPx } = this;
    const { datum } = this.props;
    const val = this.pxOrPercentToInt(datum[datumIndex], dimension);
    datumPx[datumIndex] = val;
    const updateConfines = datumIndex ? ['top', 'bottom'] : ['left', 'right'];
    confines[updateConfines[0]] = val;
    confines[updateConfines[1]] = this.confines[updateConfines[1]] + val;    
  }

  setDimensions() {
    const { $this, confines } = this;
    const { confinedTo } = this.props;
    const thisWidth = dimension($this, 'width', true);
    const thisHeight = dimension($this, 'height', true);
    confines.right = confinedTo ? dimension(confinedTo, 'width', false, true) - thisWidth : null;
    confines.bottom = confinedTo ? dimension(confinedTo, 'height', false, true) - thisHeight : null;

    this.setDatumAndConfines(0, thisWidth); // xAxis
    this.setDatumAndConfines(1, thisHeight); // yAxis
  }
  
  toggleMouseDownHandlers(onOff) {
    const { mouseDown } = this.handlers;
    const { handles } = this.props;
    if (handles && handles.length > 0) {
      // if theres $handles make each one a draggable surface.
      handles.forEach(function($el) {
        $el[onOff]('mousedown', mouseDown, false);
      });
    } else {
      // if there's not a handle make the whole item a draggable handle
      this.$this[onOff]('mousedown', mouseDown, false);
    }
  }

  handlers = {
    mouseDown: (event) => {
      event.preventDefault();
      const { $this, $doc, props: { onStartDrag } } = this;
      const { mouseMove, mouseUp } = this.handlers;
      this.relativeClickCoords = this.getRelativeCoords(event.pageX, event.pageY, this.$this);

      this.setDimensions();

      $this.addEventListener('mouseup', mouseUp);
      $doc.addEventListener('mouseup', mouseUp);
      $doc.addEventListener('mousemove', mouseMove);
      // Event: stopDrag 
      if (onStartDrag) onStartDrag();

    },
    mouseMove : (event) => {
      const { onDrag } = this.props;
      event.preventDefault();
      const dragPos = this.drag(event.pageX, event.pageY);
      if (onDrag && dragPos) onDrag({
        event:event,
        ...dragPos,
      });
    },
    mouseUp : () => {
      const { $doc, props: { onStopDrag } } = this;
      const { mouseMove, mouseUp } = this.handlers;
      $doc.removeEventListener('mouseup', mouseUp);
      $doc.removeEventListener('mousemove', mouseMove);
      this.relativeClickCoords = null;

      if (onStopDrag) onStopDrag();
    },
  }

  render() {
    const { as, children, className } = this.props;
    const Element = as;
    return (
      <Element
        className={classnames(className, 'c-Drag')}
        ref={$this => {
          this.originalOffset = offset($this);
          this.$this = $this;
          this.setDimensions();
          this.toggleMouseDownHandlers('addEventListener');
        } }
      >
        {children}
      </Element>
    );
  }
}



/*
import './Drag.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from '../../../proptypes/className';
import dimension from 'js-lib/dimension';
import offset from 'js-lib/offset';

export default class Drag extends React.PureComponent {

  static propTypes = {
    as: PropTypes.string,
    className: classNameType,
    children: PropTypes.node,
    confinedTo: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),
    datum: PropTypes.arrayOf(PropTypes.string),
    handles: PropTypes.arrayOf(PropTypes.node), // references, but will they be created yet?
    xAxis: PropTypes.bool,
    yAxis: PropTypes.bool,
    limits: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    onDrag: PropTypes.func,
    onStopDrag: PropTypes.func,
    onStartDrag: PropTypes.func,

  }

  static defaultProps = {
    as: 'span',
    datum: ['0px', '0px'],
    xAxis: true,
    yAxis: true,
    limits: {},
  }

  $doc;
  $this;
  relativeClickCoords;
  originalOffset;
  xCoord = undefined;
  yCoord = undefined;
  confines = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  }
  datumPx = [undefined, undefined];

  componentDidMount() {
    this.$doc = document;
  }

  componentWillUnmount() {
    const { $this, $doc } = this;
    const { mouseMove, mouseUp } = this.handlers;
    $this.removeEventListener('mouseup', mouseUp);
    $doc.removeEventListener('mouseup', mouseUp);
    $doc.removeEventListener('mousemove', mouseMove);
    this.toggleMouseDownHandlers('removeEventListener');
  }

  // TODO: revise this
  getRelativeCoords(x, y, $target) {
    const targetOffset = offset($target);
    return {
      x: x - targetOffset.left,
      y: y - targetOffset.top,
    };
  }

  drag(xPos, yPos) {
    const {
      confines,
      originalOffset,
      relativeClickCoords,
    } = this;

    const {
      limits,
      xAxis,
      yAxis,
    } = this.props;

    const didDrag = {
      x: false,
      y: false,
    };

     // TODO: revise this. DRY
    if (yAxis) {
      const tempyCoord = yPos - relativeClickCoords.y;
      if (
        (!limits.bottom || tempyCoord <= limits.bottom + originalOffset.top) &&
        (!limits.top || tempyCoord >= limits.top - originalOffset.top) &&
        (!confines.top && !confines.bottom) ||
        (tempyCoord <= confines.bottom && tempyCoord >= confines.top)) {
        this.yCoord = tempyCoord;
        // easier and I imagine quicker than re-rendering in react
        this.$this.style.top = this.yCoord + 'px';
        didDrag.x = true;
      }
    }

    if (xAxis) {
      let tempxCoord = xPos - relativeClickCoords.x;
      if ((!limits.left || tempxCoord >= limits.left + originalOffset.left) &&
        (!limits.right || tempxCoord <= limits.right - originalOffset.left)) {

        if ((!confines.left && !confines.right) ||
          (tempxCoord >= confines.left && tempxCoord <= confines.right)) {
          // within confines
          // easier and I imagine quicker than re-rendering in react
          this.$this.style.left = tempxCoord + 'px';
          didDrag.y = true;
        }

        if (tempxCoord <= confines.left && typeof confines.left !== 'undefined' && this.xCoord > confines.left) {
          console.log('left out');
          // outside of confine
          tempxCoord = confines.left;
          this.$this.style.left = confines.left + 'px';
          didDrag.y = true;
        } else if (tempxCoord >= confines.right && (confines.right && this.xCoord < confines.right)) {
          console.log('right out');
          tempxCoord = confines.right;
          // outside of confine
          this.$this.style.left = confines.right + 'px';
          didDrag.y = true;
        }
        if (didDrag.y) this.xCoord = tempxCoord;
      }
    }
    if (didDrag.x === true || didDrag.y === true  ) {
      return {
        yCoord: this.yCoord,
        xCoord: this.xCoord,
      }
    } else {
      return;
    }

  }

  pxOrPercentToInt(pxOrPercentValue, percentOf) {
    if (pxOrPercentValue.indexOf('%') !== -1) {
      const value = parseInt(pxOrPercentValue.replace('%'), 10);
      // calulate percent
      return Math.floor((value / 100) * percentOf);
    } else {
      return parseInt(pxOrPercentValue, 10);
    }
  }

  setDatumAndConfines(datumIndex, dimension) {
    const { confines, datumPx } = this;
    const { datum } = this.props;
    const val = this.pxOrPercentToInt(datum[datumIndex], dimension);
    datumPx[datumIndex] = val;
    const updateConfines = datumIndex ? ['top', 'bottom'] : ['left', 'right'];
    confines[updateConfines[0]] = val;
    confines[updateConfines[1]] = this.confines[updateConfines[1]] + val;
  }

  setDimensions() {
    const { $this, confines } = this;
    const { confinedTo } = this.props;
    const thisWidth = dimension($this, 'width', true);
    const thisHeight = dimension($this, 'height', true);
    confines.right = confinedTo ? dimension(confinedTo, 'width', false, true) - thisWidth : null;
    confines.bottom = confinedTo ? dimension(confinedTo, 'height', false, true) - thisHeight : null;

    this.setDatumAndConfines(0, thisWidth); // xAxis
    this.setDatumAndConfines(1, thisHeight); // yAxis
  }

  toggleMouseDownHandlers(onOff) {
    const { mouseDown } = this.handlers;
    const { handles } = this.props;
    if (handles && handles.length > 0) {
      // if theres $handles make each one a draggable surface.
      handles.forEach(function($el) {
        $el[onOff]('mousedown', mouseDown, false);
      });
    } else {
      // if there's not a handle make the whole item a draggable handle
      this.$this[onOff]('mousedown', mouseDown, false);
    }
  }

  handlers = {
    mouseDown: (event) => {
      event.preventDefault();
      const { $this, $doc, props: { onStartDrag } } = this;
      const { mouseMove, mouseUp } = this.handlers;
      this.relativeClickCoords = this.getRelativeCoords(event.pageX, event.pageY, this.$this);

      this.setDimensions();

      $this.addEventListener('mouseup', mouseUp);
      $doc.addEventListener('mouseup', mouseUp);
      $doc.addEventListener('mousemove', mouseMove);
      // Event: stopDrag
      if (onStartDrag) onStartDrag();

    },
    mouseMove : (event) => {
      const { onDrag } = this.props;
      event.preventDefault();
      const dragPos = this.drag(event.pageX, event.pageY);
      if (onDrag && dragPos) onDrag({
        event:event,
        ...dragPos,
      });
    },
    mouseUp : () => {
      const { $doc, props: { onStopDrag } } = this;
      const { mouseMove, mouseUp } = this.handlers;
      $doc.removeEventListener('mouseup', mouseUp);
      $doc.removeEventListener('mousemove', mouseMove);
      this.relativeClickCoords = null;

      if (onStopDrag) onStopDrag();
    },
  }

  render() {
    const { as, children, className } = this.props;
    const Element = as;
    return (
      <Element
        className={classnames(className, 'c-Drag')}
        ref={$this => {
          this.originalOffset = offset($this);
          this.$this = $this;
          this.setDimensions();
          this.toggleMouseDownHandlers('addEventListener');
        } }
      >
        {children}
      </Element>
    );
  }
}

*/