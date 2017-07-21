import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from 'states'

/**
 * Requires states, auth.isLoggedIn() 
 */
export const PrivateRoute = ({ component, ...rest }) =>
  <Route
    {...rest}
    render={props => {
      return auth.isLoggedIn()
        ? React.createElement(component, props)
        : <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
    }}
  />
