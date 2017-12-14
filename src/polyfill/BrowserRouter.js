// @flow
import React from 'react'
import queryString from 'query-string'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { omitBy } from 'lodash'

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory(this.props)
    this.patchHistoryQuery(this.history)
    this.patchHistoryHashAnchor(this.history)
  }

  render() {
    return <Router history={this.history} children={this.props.children} />
  }

  patchHistoryQuery(history) {
    const historyListen = function() {
      history.location = Object.assign(history.location, {
        query: queryString.parse(history.location.search),
      })
    }
    history.listen(historyListen)
    historyListen()

    // push({query: {q: 'a', removed: undefined|''}})    // always remove isEmpty query string
    // push({query: {page: 1}, keep: true})         // keep other queries
    const originalPush = history.push
    history.push = function(path, state) {
      if (path.query) {
        if (path.keep) {
          path.query = Object.assign(
            {},
            this.history.location.query,
            path.query
          )
        }
        path.query = omitBy(path.query, v => v === undefined || v === '')
        path.search = queryString.stringify(path.query)
      }
      return originalPush(path, state)
    }
  }

  patchHistoryHashAnchor(history, timeout = 1000) {
    let observer
    let timeoutId

    if (!window.MutationObserver) {
      return
    }

    const reset = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      if (observer) {
        observer.disconnect()
      }
    }

    const createScrollToElement = (id: string) => {
      return () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView()
          reset()
          return true
        }
        return false
      }
    }

    history.listen((location: any, action: any) => {
      if (timeoutId) {
        reset()
      }
      if (action !== 'PUSH') {
        return
      }
      if (typeof location.hash !== 'string') {
        return
      }
      const elementId = location.hash.slice(1)
      if (!elementId) {
        return
      }
      const scrollToElement = createScrollToElement(elementId)
      setTimeout(() => {
        if (scrollToElement()) {
          return
        }
        observer = new MutationObserver(scrollToElement)
        observer.observe(document, {
          attributes: true,
          childList: true,
          subtree: true,
        })
        timeoutId = setTimeout(reset, timeout)
      })
    })
  }
}

export default BrowserRouter
