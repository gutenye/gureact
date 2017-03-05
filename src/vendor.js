import React from 'react'
export { default } from 'react'
export { default as styled } from 'styled-components'
import { NavLink as _NavLink } from 'react-router-dom'
export { Link } from 'react-router-dom'
export { tablet, desktop, mobileOnly, tabletOnly } from './constants'

export const NavLink = (props) => <_NavLink activeClassName='active' {...props}>{props.children}</_NavLink>
