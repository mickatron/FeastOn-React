import { shallow } from 'enzyme';
import React from 'react';
import uiWrapper from './uiWrapper';

const TestComponent = uiWrapper({
  name: 'TestComponent',
  blockName: 'Test__component',
});

describe('uiWrapper', () => {
  let component = null;

  it('renders', () => {
    component = shallow((
      <TestComponent
        modifier="test"
      >
        <p>Test Component Content.</p>
      </TestComponent>
    ));
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    component = shallow((
      <TestComponent>
        <p>Test Component Content.</p>
      </TestComponent>
    ));
    expect(component).toMatchSnapshot();
  });
});
