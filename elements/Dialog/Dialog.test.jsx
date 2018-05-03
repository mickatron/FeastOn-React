import { render } from 'enzyme';
import React from 'react';
import Dialog from './index';
/*
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
<DialogHeader><p><strong>A Default Dialog Header</strong></p></DialogHeader>
  <DialogContent><p>A Default Dialog Content</p></DialogContent>
  <DialogFooter><p>A Default Dialog Footer</p></DialogFooter>
*/

describe('Dialog', () => {
  let component = null;

  it('renders', () => {
    component = render((
      <Dialog>
        <Dialog.Header><p><strong>A Default Dialog</strong></p></Dialog.Header>
        <Dialog.Content><p>A Default Dialog</p></Dialog.Content>
        <Dialog.Footer>Close</Dialog.Footer>
      </Dialog>
    ));
    expect(component).toMatchSnapshot();
  });
});
