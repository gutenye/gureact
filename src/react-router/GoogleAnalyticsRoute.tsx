import React from 'react'
import ga from 'react-ga'
import { Route, RouteComponentProps } from 'react-router-dom'

interface Props {
  children?: any
  location?: any
}

/**
 * Depends react-router for this.props.location.pathname
 */
class GoogleAnalytics extends React.Component<Props> {
  componentDidMount() {
    const page = this.props.location.pathname
    trackPage(page)
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = this.props.location.pathname
    const nextPage = nextProps.location.pathname
    if (currentPage !== nextPage) {
      trackPage(nextPage)
    }
  }

  render() {
    return this.props.children
  }
}

function trackPage(page) {
  ga.set({ page })
  ga.pageview(page)
}

export default ({ children, ...rest }) => (
  <Route
    render={routeProps => (
      <GoogleAnalytics {...routeProps}>{children}</GoogleAnalytics>
    )}
  />
)
