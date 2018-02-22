

import { shallow } from 'enzyme';
import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

describe('ButtonGroup', () => {

  let component = null;
  describe('renders', () => {
    it('custom className', () => {
      component = shallow(
        <ButtonGroup className="test">
          <Button>Button text</Button>
          <Button>Button text</Button>
          <Button>Button text</Button>
        </ButtonGroup>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('.c-ButtonGroup.test').exists()).toBeTruthy();
    });
  });
});