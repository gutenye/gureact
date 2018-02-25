import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from 'states'

/**
 * <PrivateRoute path='/add' component=x />
 * <PrivateRoute [wrapper]> <Route> ..
 */
export default function PrivateRoute({
  component: Component,
  wrapper: Wrapper,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        let result = null
        if (Component) result = <Component {...props} />
        else if (Wrapper) result = <Wrapper {...props}>{children}</Wrapper>
        else if (children) result = children

        const redirect = (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )

        return auth.isLoggedIn() ? result : redirect
      }}
    />
  )
}
