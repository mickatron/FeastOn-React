import { shallow } from 'enzyme';
import React from 'react';
import ContentToggle from './ContentToggle';

describe('ContentToggle', () => {

  let component = null;
  describe('renders', () => {
    it('ContentToggle', () => {
      component = shallow(
        <ContentToggle
          className="test"
          header="some test header value"
          open={true}
        >
          <p>Some ContentToggle test text.</p>
        </ContentToggle>
      );
      expect(component).toMatchSnapshot();
      component.find('.c-ContentToggle__header').simulate('click', {});
      expect(component.state('open')).toBe(false);
    });

    it('closed & disabled ContentToggle', () => {
      component = shallow(
        <ContentToggle 
          className="test"
          header="some test header value"
          open={false}
          disabled={true}
        >
          <p>Some ContentToggle test text.</p>
        </ContentToggle>
      );
      expect(component).toMatchSnapshot();
      component.find('.c-ContentToggle__header').simulate('click', {});
      expect(component.state('open')).toBe(false);
    });

  });

});