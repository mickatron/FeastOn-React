import { mount } from 'enzyme';
import React from 'react';
import DialogFooter from './DialogFooter';

describe('DialogFooter', () => {
  let component = null;

  it('renders', () => {
    component = mount((
      <DialogFooter>
        <p>A Default DialogFooter.</p>
      </DialogFooter>
    ));
    expect(component).toMatchSnapshot();
  });
});
