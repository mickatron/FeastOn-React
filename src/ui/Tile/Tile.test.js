import { shallow } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('Tile', () => {

  let component = null;

  beforeAll(() => {
    component = shallow(
      <Tile 
        className="test"
      >
        <p>Tile Content</p>
      </Tile>
    );
    expect(component).toMatchSnapshot();
  });

  describe('renders', ()=>{
    it('has custom className', ()=>{
      expect(component.find('.c-Tile.test').exists()).toBeTruthy();
    });

    it('has children', () => { 
      expect(component.find('.c-Tile p').exists()).toBeTruthy();
    });

  });
});