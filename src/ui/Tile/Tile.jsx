import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Tile extends React.PureComponent {
  
  static propTypes = {
    className: classNameType,
    children: PropTypes.node.isRequired,
  };
  
  render() {
    const { className, children } = this.props;
    return <div className={classnames(className,'c-Tile')} >{children}</div>;
  }
}
