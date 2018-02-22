import { shallow } from 'enzyme';
import React from 'react';
import Message from './Message';

describe('Message', () => {

  let component = null;
  describe('renders', () => {
    it('truthy Message', () => {
      component = shallow(
        <Message
          className="test"
          value="some test value"
          type="truthy"
        >
          <p>Some child content.</p>
        </Message>
      );
      expect(component).toMatchSnapshot();
    });
  });

});