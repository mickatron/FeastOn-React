import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default class Select extends React.PureComponent {

  static propTypes = {
    className: classNameType,
    options: PropTypes.arrayOf({
      className: classNameType,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    value: PropTypes.oneOf([ 
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  }

  render() {
    const { className, options, value, ...other } = this.props;
    return (
      <select 
        className={classnames(className, 'c-Select')} 
        {...other} 
      >
        { options.map((options) => {
          const {className, label, value} = options;
          return <option className={className} value={value}>{label}</option>;
        }) }
      </select>
    );
  }
}