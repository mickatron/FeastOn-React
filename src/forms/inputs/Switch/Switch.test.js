import { shallow } from 'enzyme';
import React from 'react';

import Switch from './Switch';
// import data from '../mock/data'

describe('Switch', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <Switch
        label="form label"
        className="test"
      >
        <input />
      </ Switch>
    );
  });

  describe('renders', () => {
    it('has passed in className', () => {
      expect(component.find('.c-Switch.test').exists()).toBeTruthy();
    });
    it('has correct children elements', () => {
      expect(component.find('.c-Switch .c-Switch__text').exists()).toBeTruthy();
      expect(component.find('.c-Switch .c-Switch__text').text()).toEqual('no');
      expect(component.find('.c-Switch .c-Switch__slider').exists()).toBeTruthy();
    });

    it('true classname is not present', () => {
      expect(component.find('.c-Switch.c-Switch--true').exists()).toBeFalsy();
    });
    it('state value', () => {
      expect(component.state('value')).toBe(false);
    });

  });

  describe('switches on click', () => { 

    beforeAll(() => {
      component.find('.c-Switch').simulate('click',{}); 
    });
    it('true classname is present', () => {
      expect(component.find('.c-Switch.c-Switch--true').exists()).toBeTruthy();
    });
    it('state value changed', () => {
      expect(component.state('value')).toBe(true);
    });
  });

  describe('renders custom text', () => {
    it('renders custom text', () => {
      expect(component.find('.c-Switch.test').exists()).toBeTruthy();
    });
  });

});