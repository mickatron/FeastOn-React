import * as React from 'react';



export interface ButtonProps {
  [key: string]: any;
  /** An element type to render as (string or function). */
  as?: any;
  /** Primary content. */
  children?: React.ReactNode;
  /** Additional classes. */
  className?: string | array | object;
  /** BEM modifier attributes.*/
  modifier?: string | array ;
  /** Width className */
  width?: string;
}

declare class Button extends React.Component<ButtonProps, {}> {
}

export default Button;