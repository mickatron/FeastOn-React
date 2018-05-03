import PropTypes from 'prop-types';
import React from 'react';

import classNameType from '../../../proptypes/className';
import uiWrapper from '../../../HOC/uiWrapper/uiWrapper';

class Select extends React.PureComponent {
  static propTypes = {
    /** Options to be rendered by the Select component. */
    options: PropTypes.arrayOf(PropTypes.shape({
      className: classNameType,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    /** The selected option value of the Select component. */
    value: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  }

  static defaultProps = {
    value: undefined,
  }

  render() {
    const {
      options,
      value,
    } = this.props;

    return (
      <React.Fragment>
        {options.map(option => (
          <option
            key={option.value}
            className={option.className}
            value={option.value}
            selected={value && option.value === value}
          >
            {option.label}
          </option>
        ))}
      </React.Fragment>
    );
  }
}

// return HOC wrapped component
export default uiWrapper({
  name: 'Select',
  Component: Select,
  element: 'select',
});
