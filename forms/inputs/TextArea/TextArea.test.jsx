import { render } from 'enzyme';
import React from 'react';
import TextArea from './TextArea';

describe('TextArea', () => {
  let component = null;

  it('renders', () => {
    component = render((
      <TextArea
        value="Some text area text."
      />
    ));
    expect(component).toMatchSnapshot();
  });
});
