import { render } from 'enzyme';
import React from 'react';
import Menu from './index';

describe('Menu', () => {
  let component = null;

  it('renders and snapshot', () => {
    component = render((
      <Menu>
        <Menu.Item key="1">
          <p>Menu Item</p>
        </Menu.Item>
        <Menu.Item key="2">
          <p>Menu Item</p>
        </Menu.Item>
        <Menu.Item key="3">
          <p>Menu Item</p>
        </Menu.Item>
      </Menu>
    ));
    expect(component).toMatchSnapshot();
  });
});
