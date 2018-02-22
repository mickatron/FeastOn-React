import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';


export default class TextArea extends React.PureComponent {
  
  static propTypes = {
    className: classNameType,
    children: PropTypes.node.isRequired,
    rows: PropTypes.number,
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
  };

  static defaultProps = {
    size: 'medium',
    rows: 5,
  };

  render() {
    const {
      className,
      children,
      size,
      ...other
    } = this.props;

    const otherClassNames = {
      ['c-TextArea--' + size]: size !== 'medium',
    };

    return (
      <textarea
        className={classnames(className, 'c-TextArea', otherClassNames)}
        type="text"
        { ...other }
      >
        {children}
      </textarea>
    );
  }
}
