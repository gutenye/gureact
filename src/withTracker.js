import React from 'react'
import GoogleAnalytics from 'react-ga'

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  return class extends React.Component {
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
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withTracker
