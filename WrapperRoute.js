import React from 'react'
import { Route } from 'react-router-dom'

// <WrapperRoute [wrapper]> <Route> ..
export default function WrapperRoute({ wrapper: Wrapper, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Wrapper ? <Wrapper {...props}>{children}</Wrapper> : children
      }
    />
  )
}
