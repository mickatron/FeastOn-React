import { mount } from 'enzyme';
import React from 'react';
import DialogContent from './DialogContent';

describe('DialogContent', () => {
  let component = null;

  it('renders', () => {
    component = mount((
      <DialogContent>
        <p>A Default DialogContent.</p>
      </DialogContent>
    ));
    expect(component).toMatchSnapshot();
  });
});
