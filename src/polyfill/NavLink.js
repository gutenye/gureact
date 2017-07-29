import React from 'vendor'
import { NavLink } from 'react-router-dom'
import { isString, map } from 'lodash'

/**
 * activeClassName='active'
 * to={query}
 * isActive based on query and status: 'root', 'saved', 'custom'
 */
class SavedSearchBarNavLink extends React.Component {
  render() {
    const { to, ...rest } = this.props
    return (
      <NavLink
        to={this.toStr(to)}
        activeClassName="active"
        isActive={this.isActive(this.toObj(to))}
        {...rest}
      />
    )
  }

  // str/obj -> obj
  toObj = to => {
    if (isString(to))
      
      ...
    return to
  }

  // str/obj -> str
  toStr = to => {
    return isString(to) ? to : `${to.pathname}?${toQueryString(to.query)}`
  }

  isActive = (to) => {
    return (match, location) => {
      pd('isActive', match, location)
      return false
    }
  }
}

export default SavedSearchBarNavLink
