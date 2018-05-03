import { shallow } from 'enzyme';
import React from 'react';
import Label from './Label';

describe('Label', () => {
  let component = null;

  it('renders', () => {
    component = shallow((
      <Label
        text="Label text"
        input={({ uid }) => (
          <input id={uid} />
        )}
      />
    ));
    expect(component).toMatchSnapshot();
  });
});
