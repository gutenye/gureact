import { NavLink } from 'react-router-dom'

const NavLinkWrapped = props =>
  <NavLink activeClassName="active" {...props}>{props.children}</NavLink>

export default NavLinkWrapped
