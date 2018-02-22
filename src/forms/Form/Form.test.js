import { shallow } from 'enzyme';
import React from 'react';

import Form from './Form';
// import data from '../mock/data'

describe('Form', () => { 
  let component;
  beforeAll(() => {
    component = shallow(
      <Form 
        className="test"
      />
    );
  });

  describe('renders', () => { 
    it('has passed in className', ()=>{
      expect(component.find('.c-form.test').exists()).toBeTruthy();
    });
  });
});