import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from 'states'

/**
 * <PrivateRoute path='/add' component=x />
 * 
 * Requires states, auth.isLoggedIn() 
 */
export default ({ component, ...rest }) =>
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
