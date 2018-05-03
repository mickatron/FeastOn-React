import PropTypes from 'prop-types';
import React from 'react';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import UIWrapperHOC from '../../HOC/uiWrapper/uiWrapper';

import keyType from '../../proptypes/key';
import Accordion from '../../elements/Accordion/Accordion';


function getAttributes(accordions) {
  return accordions.filter((accordion) => {
    if (accordion.open) return true;
    return false;
  }).map((accordion) => {
    return { [accordion.keyId]: accordion.open };
  });
}

class Accordions extends React.PureComponent {
  static propTypes = {
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

  static defaultProps = {
    allow: 0,
    disabled: false,
    onToggle: undefined,
  }

  state = {
    isOpen: getAttributes(this.props.accordions),
  }

  accordionHandler = (event, data) => {
    const { allow, onToggle } = this.props;
    const isOpen = [...this.state.isOpen];

    if (data.open) {
      isOpen.push({ [data.keyId]: data.open });
    } else {
      isOpen.splice(findIndex(isOpen, data.keyId), 1);
    }

    if (
      allow !== 0
      && this.state.isOpen.length === allow
    ) {
      isOpen.shift();
    }
    this.setState({ isOpen }, () => {
      // TODO: should i pass through the data object or create a new one from state.isOpen?
      if (onToggle) onToggle(event, data);
    });
  };

  render() {
    const {
      accordions,
    } = this.props;

    return (
      <React.Fragment>
        {accordions.map(accordion => (
          <Accordion
            as="li"
            key={accordion.keyId}
            {...accordion}
            open={find(this.state.isOpen, accordion.keyId) ? true : false}
            onToggle={this.accordionHandler}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default UIWrapperHOC({
  name: 'Accordions',
  Component: Accordions,
  element: 'ul',
  modifiers: ['disabled'],
});
