import { shallow } from 'enzyme';
import React from 'react';

import HtmlInput from './HtmlInput';

describe('HtmlInput', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <HtmlInput
        className="test"
        type="text"
      />
    );
  });

  describe('renders', () => {
    it('has passed in className', () => {
      expect(component.find('.c-TextInput.test').exists()).toBeTruthy();
    });
  });

});