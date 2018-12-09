import React from 'react'
import Route2 from './Route2'
import PrivateRoute from './PrivateRoute'
import { Switch, Redirect } from 'react-router-dom'

/**
 *  <RouteWithConfig
 *    routes: [
 *      {
 *       path, component, redirect, layout, routes,   // Route
 *       name, icon, rootDrawer, drawer,         // Drawer
 *       roles: ['admin', 'user'],       // Authorization
 * 
 * exact: true by default. otherwise /userabc matches /user makes Authorization broken
 * 
const routes = [
  { path: '/auth', layout: BlankLayout, routes: [
    { path: '/auth/login', component: LoginPage }
  ]},
  { path: '/', layout: [Authorization, DefaultLayout], roles: ['admin', 'user'], rootDrawer: false, routes: [
    { path: '/', redirect: '/users/show' },
    { path: '/users/show', component: UserShow, drawer: false }
    { path: '/users/edit', component: UserEdit, roles: ['admin'] }
  ] },
]

*/

interface Props {
  routes: any[]
}

class RouteWithConfig extends React.PureComponent<Props> {
  render() {
    const { routes } = this.props
    return <Switch>{this.renderRoutes(routes)}</Switch>
  }

  renderRoutes(routes) {
    return routes.map(route => {
      const { routes, redirect, ...rest } = route
      if (routes) {
        return (
          <Route2 key={rest.path} {...rest}>
            {this.renderRoutes(routes)}
          </Route2>
        )
      } else if (redirect) {
        return <Redirect from={rest.path} to={redirect} />
      } else {
        return <Route2 key={rest.path} exact {...rest} />
      }
    })
  }
}

export default RouteWithConfig
