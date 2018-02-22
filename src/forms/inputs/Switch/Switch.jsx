import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Switch extends React.PureComponent {

  static propTypes = {
    className: classNameType,
    text: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
    value: PropTypes.bool,
  }

  static defaultProps = {
    value: false,
    text: {
      true: 'yes',
      false: 'no',
    },
  }

  state = {
    value: this.props.value,
  }

  onClickHandler() {
    const { value } = this.state;
    this.setState({ value: !value });
  }

  render() {
    const { className, text, value, ...other } = this.props; 
    const stateValue = this.state.value;
    const extraClassNames = {
      'c-Switch--true': stateValue,
    };

    return (
      <button
        className={classnames(className, 'c-Switch', extraClassNames)}
        onClick={() => this.onClickHandler()}
        type="button"
      >
        <input 
          type="checkbox" 
          {...other}
          value={stateValue}
        />
        <span className="c-Switch__text">{stateValue ? text.true : text.false}</span>
        <span className="c-Switch__slider"></span>
      </button>
    );
  }
}