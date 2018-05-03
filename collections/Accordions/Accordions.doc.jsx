/* eslint-disable */
import React from 'react';
import Component from './Accordions';
import PropTypes from 'prop-types';
import keyType from '../../proptypes/key';
import classNameType from '../../proptypes/className';

/**
 * A collection of `Accordion` components rendered in a group. By default the grouping is 
 * rendered as a `ul` list though the rendered HTML can be customized. 
 * 
 * @composedWith UiWrapper
 *
*/
function Accordions(props) {
  return <Component {...props} />;
}
Accordions.propTypes = {
  /** Disable the Accordions. */
  disabled: PropTypes.bool,
  accordions: PropTypes.arrayOf(PropTypes.shape({
    keyId: keyType.isRequired,
    /** Disable the ContentToggle. */
    disabled: PropTypes.bool,
    /** ContentToggle header props. */
    /** AccordionHeader props. */
    header: PropTypes.shape({
      children: PropTypes.node.isRequired,
    }).isRequired,
    /** AccordionContent props. */
    content: PropTypes.shape({
      children: PropTypes.node.isRequired,
    }).isRequired,
    open: PropTypes.bool.isRequired,
  })).isRequired,
  onToggle: PropTypes.func,
  allow: PropTypes.number,
  // toggleAllButton: create as HOC.
}

Accordions.defaultProps = {
  allow: 0,
  disabled: false,
  onToggle: undefined,
}

export default Accordions;
