
import { shallow } from 'enzyme';
import React from 'react';
import MenuList from './MenuList';

describe('MenuList', () => {

  let component = null;
  beforeAll(() => {
    component = shallow(
      <MenuList 
        className="test"
        items={[
          { label: 'item 1', route: '/route' }, 
          { label: 'item 1', route: '/route' },
          { label: 'Configure', route: '/route' },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    expect(component.find('.c-MenuList.test').exists()).toBeTruthy();
  });

  it('three menu items', () => {
    expect(component.find('.c-MenuList li')).toHaveLength(3);
  });


});