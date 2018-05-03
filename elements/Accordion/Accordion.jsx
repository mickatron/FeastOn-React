import PropTypes from 'prop-types';
import React from 'react';
import UIWrapperHOC from '../../HOC/uiWrapper/uiWrapper';

import keyType from '../../proptypes/key';
import ContentToggle from '../ContentToggle/ContentToggle';
import Content from './AccordionContent/AccordionContent';
import Header from './AccordionHeader/AccordionHeader';

class Accordion extends React.PureComponent {
  static propTypes = {
    keyId: keyType,
    /** Disable the Accordion. */
    disabled: PropTypes.bool,
    /** AccordionHeader props. */
    header: PropTypes.shape({
      children: PropTypes.node.isRequired,
    }).isRequired,
    /** AccordionContent props. */
    content: PropTypes.shape({
      children: PropTypes.node.isRequired,
    }).isRequired,
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

  render() {
    const {
      content,
      header,
      ...other
    } = this.props;
    
    return (
      <ContentToggle
        header={({ onToggle }) => {
          return (
            <Header
              onClick={onToggle}
              {...header}
            />
          );
        }}
        content={() => <Content {...content} />}
        {...other}
      />
    );
  }
}

export default UIWrapperHOC({
  name: 'Accordion',
  Component: Accordion,
  modifiers: ['open', 'disabled'],
});
