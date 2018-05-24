import PropTypes from 'prop-types';
import React from 'react';

import Label from '../../Label/Label';
import uiWrapper from '../../../HOC/uiWrapper';

import HtmlInput from '../HtmlInput/HtmlInput';

class RadioGroup extends React.PureComponent {
  static propTypes = {
    /** A unique name for the radio controls to be grouped by. */
    name: PropTypes.string.isRequired,
    /** An array of Objects containing props suitable for rendering a radio. */
    // TODO: should this be renderProps, and an array of renderProps?
    radios: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.string,
  }

  state = {
    value = this.props.value,
  }

  onChange = (event) => {
    const { checked, value } = event.target;
    if (checked && value) { 
      this.setState({ value });
    } else if (!checked && value) {
      this.setState({ value: null });
    }
  }

  render() {
    const {
      name,
      radios,
    } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        {radios.map(radio => (
          <Label
            key={radio.value}
            text={radio.label}
            renderInput="left"
            input={({ uid }) => (
              <HtmlInput
                {...radio}
                type="radio"
                name={name}
                id={uid}
                checked={value && value === radio.value}
                onChange={this.onChange}
              />
            )}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default uiWrapper({
  name: 'RadioGroup',
  element: 'div',
  Component: RadioGroup,
});
