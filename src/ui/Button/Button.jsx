import classnames from 'classnames';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import alphaSizesType from 'js/shared/proptypes/alphaSizes';
import classNameType from 'js/shared/proptypes/className';

export default class Button extends React.PureComponent { 
  
  static propTypes = {
    appearance: PropTypes.oneOf([
      'button',
      'link',
      'outline',
      'custom',
    ]),
    className: classNameType,
    children: PropTypes.node.isRequired,
    Icon:PropTypes.oneOfType([ 
      PropTypes.element,
      PropTypes.node,
    ]),
    iconPos: PropTypes.oneOf(['left','right']),
    mode: PropTypes.oneOf([
      'button',
      'link',
    ]),
    size: alphaSizesType,
  }

  static defaultProps = {
    appearance: 'button',
    Icon: undefined,
    iconPos: 'left',
    mode: 'button',
    size: 'delta',
  }

  renderChildren() {
    const {
      children,
      Icon,
      iconPos,
    } = this.props;
    return [
      Icon && iconPos==='left'? <Icon className="c-Button__icon" />: null ,
      children,
      Icon && iconPos==='right'? <Icon className="c-Button__icon" />: null,
    ];
  }

  render() { 
    const {
      appearance,
      className, 
      children,
      Icon,
      iconPos,
      mode,
      size,
      ...other
    } = this.props;
    const otherClassNames = {
      'c-Button--link': appearance === 'link' || false,
      'c-Button--outline': appearance === 'outline' || false,
    };

    const classes = classnames(className, 'c-Button', 'c-Button--' + size, otherClassNames);

    const renderedButton = {
      button: ()=>(
        <button 
          className={classes} 
          { ...other }
        >
          {this.renderChildren()}
        </button>
      ),
      link: ()=>(
        <Link 
          className={classes} 
          { ...other }
        >
          {this.renderChildren()}
        </Link>
      ),
    }[mode];

    return renderedButton();
  };
}
