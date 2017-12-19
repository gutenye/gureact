import React from 'vendor'
import { NavLink } from 'react-router-dom'
import { isString, map, omit, isEqual } from 'lodash'
import { toSearchString } from '../../utils'

/**
 * activeClassName='active'
 * to supports query
 * isActive supports query
 */
class CoreNavLink extends React.Component {
  props: {
    /** omit: ['page', 'limit'] */
    omit?: Array<string>,
  }

  static defaultProps = {
    omit: [],
  }

  render() {
    const { to, omit, ...rest } = this.props
    return (
      <NavLink
        to={this.toStr(to)}
        activeClassName="active"
        isActive={this.isActive(to)}
        {...rest}
      />
    )
  }

  // str/obj -> obj
  toObj = to => {
    if (isString(to)) {
      return { query: {} }
    }
    return to
  }

  // str/obj -> str
  toStr = to => {
    return isString(to) ? to : `${to.pathname}?${toSearchString(to.query)}`
  }

  /**
   *
   * /posts
   * /posts?a=1
   *
   * to='/posts'
   * to={query: {a: 1}}
   */
  isActive = to => {
    const toObj = this.toObj(to)
    return (match, location) => {
      const query = omit(location.query, this.props.omit)
      return isEqual(toObj.query, query)
    }
  }
}

export default CoreNavLink
