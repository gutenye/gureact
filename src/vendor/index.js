import React from 'react'
export { default } from 'react'
export { default as styled, css } from 'styled-components'
export { withRouter } from 'react-router'
import { NavLink as _NavLink } from 'react-router-dom'
export { Link } from 'react-router-dom'
export { tablet, desktop, mobileOnly, tabletOnly } from './constants'
import * as _ from './lodash'
export { _ } 

export const NavLink = (props) => <_NavLink activeClassName='active' {...props}>{props.children}</_NavLink>
