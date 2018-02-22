
import { MemoryRouter } from 'react-router-dom';
import { render, shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button', () => {

  let component = null;
  describe('renders', ()=>{
    it('custom className', () => {    
      component = shallow(
        <Button 
          className="test"
        >button text</Button>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('.c-Button.test').exists()).toBeTruthy();
      
    });

    it('link button', () => {
      component = render(
        <MemoryRouter>
          <Button 
            mode="link"
            to="/"
          >button text</Button>
        </MemoryRouter>
      );
      expect(component).toMatchSnapshot();
    });

    it('outline button', () => {
      component = shallow(
        <Button 
          appearance="outline"
        >button text</Button>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('.c-Button--outline').exists()).toBeTruthy();
    });

  });
});