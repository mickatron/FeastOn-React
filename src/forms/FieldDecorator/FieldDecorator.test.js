import { shallow } from 'enzyme';
import React from 'react';

import FieldDecorator from './FieldDecorator';
// import data from '../mock/data'

describe('FieldDecorator', () => { 
  let component;
  beforeAll(() => {
    component = shallow(
      <FieldDecorator 
        className="test"
      />
    );
  });

  describe('renders', () => { 
    it('has passed in className', ()=>{
      expect(component).toMatchSnapshot();
      expect(component.find('.test').exists()).toBeTruthy();
    });
  });
});