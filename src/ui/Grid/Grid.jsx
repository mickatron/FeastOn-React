import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Grid extends React.PureComponent {

  static propTypes = {
    as: PropTypes.string,
    className: classNameType,
    children: PropTypes.node,
    hasGutters: PropTypes.bool,
    hasOuterPadding: PropTypes.bool,
    grid: PropTypes.arrayOf(
      PropTypes.shape({
        className: classNameType,
        children: PropTypes.node,
        width: PropTypes.number,
      })
    ),
  }

  static defaultProps = {
    as: 'div',
    hasGutters: true,
    hasOuterPadding: true,
  }

  render() {
    const { children, className, grid } = this.props;
    return(
      <div className={classnames(className, 'l-Grid')}>
        {children || this.renderCells(grid)}
      </div>
    );
  }

  renderCells(cells) {
    const Element = this.props.as;
    return cells.map((cell) => {
      return (
        <Element className={classnames(cell.className, 'l-Grid__cell')}>
          {cell.children}
        </Element>
      );
    });
  }

}