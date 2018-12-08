import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { castArray, clone } from 'lodash'

interface Props {
  layout?: any
  children?: any
}

// <Route2 component />
// <Route2 component layout: x | [] />
// <Route2 layout> ..
export default ({
  layout,
  component: Component,
  children,
  ...rest
}: Props & RouteProps) => {
  if (layout) {
    return (
      <Route
        {...rest}
        render={routeProps => {
          const layouts = clone(castArray(layout)).reverse()
          children = Component ? <Component {...routeProps} /> : children
          for (let Layout of layouts) {
            const newChildren = <Layout {...routeProps}>{children}</Layout>
            children = newChildren
          }
          return children
        }}
      />
    )
  } else {
    return <Route {...rest} component={Component} />
  }
}
