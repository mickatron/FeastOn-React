import * as React from 'react';

export interface GridCellProps {
  [key: string]: any;
  /** An element type to render as (string or function). */
  as?: any;
  /** Primary content. */
  children?: React.ReactNode;
  /** Additional classes. */
  className?: string | array | object;
  /** BEM modifier attributes.*/
  modifier?: string | array;
  /** Width className */
  width?: string;
}

declare class GridCell extends React.Component<GridCellProps, {}> {
}

export default GridCell;