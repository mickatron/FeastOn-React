/* eslint-disable */
import React from 'react';
import Component from './Tile';
import PropTypes from 'prop-types';
import asType from '../../proptypes/as';
import classNameType from '../../proptypes/className';

/**
 * A basic tile device often used to group content or implement hierarchy.
 * 
 * ** Sub Components **
 * * `TileHeader` as `Tile.Header`
 * * `TileMeta` as `Tile.Meta`
 * * `TileContent` as `Tile.Content` 
 * * `TileFooter` as `Tile.Footer`
 *
 * @composedWith UiWrapper
*/
function Tile(props) {
  return <Component {...props} />;
}

export default Tile;
