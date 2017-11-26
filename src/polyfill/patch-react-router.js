import React from 'react'
import queryString from 'query-string'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { omitBy } from 'lodash'

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props)
    const history = createBrowserHistory(this.props)
    this.history = history
    const historyListen = function() {
      history.location = Object.assign(history.location, {
        query: queryString.parse(history.location.search)
      })
    }
    history.listen(historyListen)
    historyListen()
    this.patchHistory()
  }

  render() {
    return <Router history={this.history} children={this.props.children} />
  }


  patchHistory() {
    // push({query: {q: 'a', removed: undefined|''}})    // always remove isEmpty query string
    // push({query: {page: 1}, keep: true})         // keep other queries
    const originalPush = this.history.push
    this.history.push = function(path, state) {
      if (path.query) {
        if (path.keep) {
          path.query = Object.assign({}, this.history.location.query, path.query)
        }
        path.query = omitBy(path.query, v => v === undefined || v === '')
        path.search = queryString.stringify(path.query)
      }
      return originalPush(path, state)
    }
  }
}

export default BrowserRouter
