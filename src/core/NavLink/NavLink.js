import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkWrapped = (props: any) => {
  return <NavLink activeClassName="active" {...props}>{props.children}</NavLink>
}

export default NavLinkWrapped
