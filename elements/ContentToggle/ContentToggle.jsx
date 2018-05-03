import PropTypes from 'prop-types';
import React from 'react';
import UIWrapperHOC from '../../HOC/uiWrapper/uiWrapper';

import keyType from '../../proptypes/key';

class ContentToggle extends React.PureComponent {
  static propTypes = {
    keyId: keyType,
    /** Disable the ContentToggle. */
    disabled: PropTypes.bool,
    /** ContentToggle header props. */
    header: PropTypes.func.isRequired,
    /** ContentToggle content props. */
    content: PropTypes.func.isRequired,
    /** Is the ContentToggle open. */
    open: PropTypes.bool,

    onToggle: PropTypes.func,
  }

  static defaultProps = {
    keyId: undefined,
    disabled: false,
    onToggle: undefined,
    open: false,
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.open !== state.open) {
      return { open: nextProps.open };
    }
    return state;
  }

  state = {
    open: this.props.open,
  }

  onToggleHandler = (event) => {
    if (this.props.disabled) return;
    const { keyId, onToggle } = this.props;
    const { open } = this.state;
    this.setState({ open: !open }, () => {
      if (onToggle) onToggle(event, { keyId, open: this.state.open });
    });
  }

  render() {
    const {
      content,
      header,
    } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        {header({ onToggle: this.onToggleHandler, open })}
        {open && content({ open })}
      </React.Fragment>
    );
  }
}

export default UIWrapperHOC({
  name: 'ContentToggle',
  Component: ContentToggle,
  modifiers: ['open', 'disabled'],
});
