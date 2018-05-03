import { shallow } from 'enzyme';
import React from 'react';

import HtmlInput from './HtmlInput';

describe('HtmlInput', () => {
  let component;
  beforeAll(() => {
    component = shallow((
      <HtmlInput
        className="test"
        modifier="test"
        type="text"
      />
    ));
  });

  describe('renders', () => {
    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });
    it('has passed in className', () => {
      expect(component.find('.Input.test').exists()).toBeTruthy();
    });
    it('has passed in modifier', () => {
      expect(component.find('.Input--test').exists()).toBeTruthy();
    });
  });
});
