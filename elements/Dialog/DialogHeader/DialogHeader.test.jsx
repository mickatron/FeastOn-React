import { mount } from 'enzyme';
import React from 'react';
import DialogHeader from './DialogHeader';

describe('DialogHeader', () => {
  let component = null;

  it('renders', () => {
    component = mount((
      <DialogHeader>
        <p>A Default DialogHeader.</p>
      </DialogHeader>
    ));
    expect(component).toMatchSnapshot();
  });
});
