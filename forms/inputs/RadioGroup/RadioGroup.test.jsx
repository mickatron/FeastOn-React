import { render } from 'enzyme';
import React from 'react';
import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
  let component = null;

  it('renders', () => {
    component = render((
      <RadioGroup
        name="RadioGroup"
        radios={[
          {
            label: 'A',
            id: 'A',
            value: 'A',
          }, {
            label: 'B',
            id: 'B',
            value: 'B',
          }, {
            label: 'C',
            id: 'C',
            value: 'C',
          },
        ]}
      />
    ));
    expect(component).toMatchSnapshot();
  });
});
