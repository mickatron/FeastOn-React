import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Message extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: classNameType,
    type: PropTypes.oneOf([
      'truthy',
      'falsy',
      'warning',
      'info',
    ]).isRequired,
  }


  render() {
    const {children, className, type} = this.props;
    // TODO: add icons
    return (
      <div className={classnames(className, 'c-Message')}>
        {children}    
      </div>
    );
  }

}