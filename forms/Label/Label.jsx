import PropTypes from 'prop-types';
import React from 'react';

import uniqueId from 'lodash/uniqueId';

import uiWrapper from '../../HOC/uiWrapper';


class Label extends React.PureComponent {
  static propTypes = {
    /** The Label components child elements. */
    text: PropTypes.node.isRequired,
    /** A Render Prop callback used to render the input element associated to the label.
     * If we used `this.props.children` instead the elements `id` prop would have to conform
     * to some interface.
     * Using a render prop we can pass in custom and third-party input Components. */
    input: PropTypes.shape({
      component: PropTypes.func.isRequired,
    }),
    /** Should the label be rendered to the left or right of the input. */
    renderOrder: PropTypes.oneOf(['first', 'last']),
  }

  static defaultProps = {
    renderOrder: 'first',
  }

  componentWillMount() {
    // generate a unique ID for the component
    // TODO: test and update for isomorphic applications
    this.uid = uniqueId();
  }

  uid = undefined;

  render() {
    const {
      text,
      input: {component,  ...otherInputProps},
      renderOrder,
    } = this.props;
    const { uid } = this;
    const inputProps = { ...otherInputProps, uid };

    return (
      <React.Fragment>
        {renderOrder === 'first' && component(inputProps)}
        <span className="f-Label__text">{text}</span>
        {renderOrder === 'last' && component(inputProps)}
      </React.Fragment>
    );
  }
}

export default uiWrapper({
  name: 'Label',
  Component: Label,
  element: 'label',
});
