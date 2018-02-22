import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';
// import NavLink from '../NavLink/NavLink';

export default class MenuList extends React.PureComponent {
  
  static propTypes = {
    className: classNameType,
    items: PropTypes.arrayOf( 
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,        
        PropTypes.node,
      ]).isRequired,
    ),
    layout: PropTypes.oneOf(['block', 'inline']),
  };

  static defaultProps = {
    layout: 'block',
  }

  render() {
    const { className, items, layout } = this.props;
    const otherClassNames = {
      'c-MenuList--inline': layout === 'inline',
    };

    return( 
      <ul className={classnames(className, 'c-MenuList', otherClassNames)}>
        {items.map(function(menuItem, index) {
          return(
            <li 
              key={index}
            >
              { menuItem }
            </li>
          );
        })}
      </ul>
    );
  }
}