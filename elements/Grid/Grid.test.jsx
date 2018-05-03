import { render } from 'enzyme';
import React from 'react';
import Grid from './index';

describe('Grid', () => {
  let component = null;

  it('renders and snapshot', () => {
    component = render((
      <Grid>
        <Grid.Row>
          <Grid.Cell>Grid Cell 1</Grid.Cell>
          <Grid.Cell>Grid Cell 2</Grid.Cell>
          <Grid.Cell>Grid Cell 3</Grid.Cell>
          <Grid.Cell>Grid Cell 4</Grid.Cell>
          <Grid.Cell>Grid Cell 5</Grid.Cell>
          <Grid.Cell>Grid Cell 6</Grid.Cell>
          <Grid.Cell>Grid Cell 7</Grid.Cell>
          <Grid.Cell>Grid Cell 8</Grid.Cell>
        </Grid.Row>
      </Grid>
    ));
    expect(component).toMatchSnapshot();
  });
});
