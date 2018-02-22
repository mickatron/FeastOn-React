import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class GridCell extends React.PureComponent {

  static propTypes = {
    className: classNameType,
    children: PropTypes.node,
    width: PropTypes.oneOf([
      'one-quarter',
      'one-third',
      'one-half',
      'two-thirds',
      'three-quarters',
      'one-whole',
    ]),
  }
  render() {
    const { children, className, width } = this.props;
    const widthClass = width ? 'l-' + width : undefined;
    return (
      <div className={classnames(className, 'l-Grid__cell', widthClass)}>
        {children}
      </div>
    );
  }
}