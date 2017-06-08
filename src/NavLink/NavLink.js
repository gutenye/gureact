import { NavLink } from 'react-router-dom'

const NavLinkWrapped = props => {
  return <NavLink activeClassName="active" {...props}>{props.children}</NavLink>
}

export default NavLinkWrapped
