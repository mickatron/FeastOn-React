import { render } from 'enzyme';
import React from 'react';
import Message from './index';

describe('Message', () => {
  let component = null;
  describe('renders', () => {
    it('truthy Message', () => {
      component = render((
        <Message
          className="test"
          modifier="truthy"
        >
          <Message.Header><p><strong>A Default Message</strong></p></Message.Header>
          <Message.Content><p>A Default Message</p></Message.Content>
          <Message.Footer>Close</Message.Footer>
        </Message>
      ));
      expect(component).toMatchSnapshot();
    });
  });
});
