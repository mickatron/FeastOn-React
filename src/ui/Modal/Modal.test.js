import { shallow } from 'enzyme';
import React from 'react';
import Modal from './Modal';

describe('Modal', () => {

  let component = null;

  beforeAll(() => {
    component = shallow(
      <Modal 
        className="test"
        open={true}
      >
        <p>Modal Content</p>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });

  describe('renders when open={true}', ()=>{
    it('has custom className', () => {    
      expect(component.find('.c-Modal.test').exists()).toBeTruthy();
    });
    
    it('has children', () => { 
      expect(component.find('.c-Modal p').exists()).toBeTruthy();
    });
  });

  it('does not render when open={false}', () => {
    component.setProps({open:false});
    expect(component.find('.c-Modal').exists()).toBeFalsy();
  });
  
});