import { shallow } from 'enzyme';
import React from 'react';
import Form from './Form';

describe('Form', () => {
  let component = null;

  it('renders', () => {
    component = shallow((
      <Form
        text="Form text"
        input={({ uid }) => (
          <input id={uid} />
        )}
      />
    ));
    expect(component).toMatchSnapshot();
  });
});
