import React from 'react'
import ga from 'react-ga'

function trackPage(page) {
  ga.set({ page })
  ga.pageview(page)
}

class GoogleAnalytics extends React.Component {
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

export default GoogleAnalytics
