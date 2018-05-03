import { shallow } from 'enzyme';
import React from 'react';
import Dimmer from './Dimmer';

describe('Dimmer', () => {
  let component = null;

  it('renders', () => {
    component = shallow((
      <Dimmer
        className="test"
        modifier={['outline']}
      >
        <p>Test Component Content.</p>
      </Dimmer>
    ));
    expect(component).toMatchSnapshot();
  });
});
