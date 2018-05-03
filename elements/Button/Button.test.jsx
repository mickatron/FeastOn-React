import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  let component = null;

  it('renders', () => {
    component = shallow((
      <Button
        className="test"
        modifier={['outline']}
      >
        <p>Test Component Content.</p>
      </Button>
    ));
    expect(component).toMatchSnapshot();
  });
});
