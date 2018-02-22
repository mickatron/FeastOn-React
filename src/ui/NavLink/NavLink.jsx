import { NavLink as ReactNavLink } from 'react-router-dom';
import React from 'react';

export default function NavLink(props) {
  return <ReactNavLink {...props} activeClassName="c-NavLink--active"/>;
}
