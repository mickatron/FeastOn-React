import { shallow } from 'enzyme';
import React from 'react';

import Field from './Field';
// import data from '../mock/data'

describe('Field', () => { 
  let component;
  describe('renders', () => { 
    it('with label and custom classname', ()=>{
      component = shallow(
        <Field
          label="form label"
          className="test"
        >
          <input />
        </ Field>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('.c-Field.test').exists()).toBeTruthy();
    });

    it('with label and custom classname', ()=>{
      component = shallow(
        <Field
          label="form label"
          className="test"
          helpText="some test help text"
          valid={false}
          validationMessage="some test validation message"
        >
          <input />
        </ Field>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('.c-Field.test').exists()).toBeTruthy();
    });

  });
});