import { render } from 'enzyme';
import React from 'react';
import Tile from './index';

describe('Tile', () => {
  let component = null;
  describe('renders', () => {
    it('a snapshot', () => {
      component = render((
        <Tile
          className="test"
          modifier="truthy"
        >
          <Tile.Header><p><strong>A Default Tile</strong></p></Tile.Header>
          <Tile.Meta><p>A Default Tile</p></Tile.Meta>
          <Tile.Content><p>A Default Tile</p></Tile.Content>
          <Tile.Footer>Close</Tile.Footer>
        </Tile>
      ));
      expect(component).toMatchSnapshot();
    });
  });
});
