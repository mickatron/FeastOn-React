import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'reactDOM';

import classNameType from 'js/shared/proptypes/className';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.PureComponent {

  static propTypes = {
    className: classNameType,
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
  }

  static defautProps = {
    open: false,
  }

  $modal = undefined

  componentDidMount() {
    this.$modal = document.createElement('div');
    modalRoot.appendChild(this.$modal);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.$modal);
  }

  render() {
    const { className, children, open } = this.props;

    return open && ReactDOM.createPortal(
      <div 
        className={classnames(className, 'c-Modal')}
        ref={$modal => this.$modal=$modal}
      >
        {children}
      </div>,
      modalRoot,
    );
  }
}