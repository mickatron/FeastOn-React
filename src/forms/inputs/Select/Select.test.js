
import { render } from 'enzyme';
import React from 'react';
import Select from './Select';

describe('Select', () => {

  let component = null;

  it('renders', () => {
    component = render(
      <Select 
        className="test" 
        options={[{
          className:'optiontest',
          label:'option 1',
          value:1,
        },
        {
          className: 'optiontest',
          label: 'option 2',
          value: 'opt2',
        }]} 
        value="opt2"
      />
    );
    expect(component).toMatchSnapshot();
  });

});