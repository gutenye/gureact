import React from 'react'
export { default as React } from 'react'
export { default as styled } from 'styled-components'
import { NavLink as _NavLink } from 'react-router-dom'
export { Link } from 'react-router-dom'

export const NavLink = (props) => <_NavLink activeClassName='active' {...props}>{props.children}</_NavLink>
