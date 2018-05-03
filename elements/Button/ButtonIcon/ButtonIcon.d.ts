import * as React from 'react';

export interface ButtonIconProps {
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

declare class ButtonIcon extends React.Component<ButtonIconProps, {}> {
}

export default ButtonIcon;