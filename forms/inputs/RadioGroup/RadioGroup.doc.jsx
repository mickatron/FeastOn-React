/* eslint-disable */
import React from 'react';
import Component from './RadioGroup';
import PropTypes from 'prop-types';

/**
 * A RadioGroup is a collection of HTML radio's rendered as a group,
 * when grouped only one option in the group can be selected.
 *
 * @composedWith UiWrapper
*/
function RadioGroup(props) {
  return <Component {...props} />;
}

RadioGroup.propTypes = {
  /** A unique name for the radio controls to be grouped by. */
  name: PropTypes.string.isRequired,
  /** An array of Objects containing props suitable for rendering a radio. */
  radios: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
}

export default RadioGroup;
