
import { shallow } from 'enzyme';
import React from 'react';
import TextArea from './TextArea';

describe('TextArea', () => {

  let component = null;
  it('renders',() => {
    component = shallow(
      <TextArea
        className="test"
        rows={5}
        columns={10}
      >
        Some default value text
      </TextArea>
    );
    expect(component).toMatchSnapshot();
  });

});