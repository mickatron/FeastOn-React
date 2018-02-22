import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Layout extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: classNameType,
    type: PropTypes.oneOf([
      'block',
      'corset',
      'corset-block',
    ]).isRequired,
  }

  render() {
    const { children, className, type } = this.props;
    return (
      <div className={classnames(className, `l-${type}`)}>
        { children }
      </div>
    );
  }
}