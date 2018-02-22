
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import NavLink from './NavLink';

describe('NavLink', () => {

  let component = null;

  it('renders', () => {
    component = render(
      <MemoryRouter>
        <NavLink className="test" to="/test">label</NavLink>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

});