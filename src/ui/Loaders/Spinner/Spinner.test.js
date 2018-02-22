import { shallow } from 'enzyme';
import React from 'react';
import Spinner from './Spinner';

describe('Spinner', () => {

  let component = null;
  describe('renders', () => {
    it('Spinner with children', () => {
      component = shallow(
        <Spinner
          className="test"
        >
          <p>Some Spinner test text.</p>
        </Spinner>
      );
      expect(component).toMatchSnapshot();
    });
    
    it('Spinner without children', () => {
      component = shallow(
        <Spinner
          className="test"
        />
      );
      expect(component).toMatchSnapshot();
    });

  });

});