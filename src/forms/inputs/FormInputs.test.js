import { shallow } from 'enzyme';
import React from 'react';
import * as FormInputs from './FormInputs';

describe('FormInputs', () => {

  let component = null;
  describe('renders', () => {
    it('TextInput', () => {
      const ComponentToRender = FormInputs.TextInput;
      component = shallow(
        <ComponentToRender
          className="test"
          value="some test value"
        />
      );
      expect(component).toMatchSnapshot();
    });

    it('TextInput', () => {
      const ComponentToRender = FormInputs.NumberInput;
      component = shallow(
        <ComponentToRender
          className="test"
          value="some test value"
        />
      );
      expect(component).toMatchSnapshot();
    });

    it('TextInput', () => {
      const ComponentToRender = FormInputs.EmailInput;
      component = shallow(
        <ComponentToRender
          className="test"
          value="some test value"
        />
      );
      expect(component).toMatchSnapshot();
    });
  });

});