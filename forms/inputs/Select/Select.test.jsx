import { render } from 'enzyme';
import React from 'react';
import Select from './Select';

describe('Select', () => {
  let component = null;

  it('renders', () => {
    component = render((
      <Select
        onChange={() => { }}
        options={[
          {
            label: 'Select Value 1',
            value: 'Select Value 1',
          },
          {
            label: 'Select Value 2',
            value: 'Select Value 2',
          },
          {
            label: 'Select Value 3',
            value: 'Select Value 3',
          },
          {
            label: 'Select Value 4',
            value: 'Select Value 4',
          },
        ]}
      />
    ));
    expect(component).toMatchSnapshot();
  });
});
