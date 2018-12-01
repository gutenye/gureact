import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface Props {
  layout?: any
  children?: any
}

// <Route2 component />
// <Route2 component layout />
// <Route2 layout> ..
export default ({
  layout: Layout,
  component: Component,
  children,
  ...rest
}: Props & RouteProps) => {
  if (Layout) {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout {...props}>
            {Component ? <Component {...props} /> : children}
          </Layout>
        )}
      />
    )
  } else {
    return <Route {...rest} component={Component} />
  }
}
