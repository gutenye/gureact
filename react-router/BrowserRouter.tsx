import * as React from 'react'
import queryString from 'query-string'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { omitBy } from 'lodash'

/**
 * add query prop
 * - location.query
 * - push({query: {q: 'a', removed: undefined|''}})    // always remove isEmpty query string
 * - push({query: {page: 1}, keep: true})              // keep other queries
class BrowserRouter extends React.Component<any> {
  history: any

  constructor(props: any) {
    super(props)
    this.history = createBrowserHistory(props)
    this.patchHistoryQuery(this.history)
    this.patchHistoryHashAnchor(this.history)
  }

  render() {
    return <Router history={this.history} children={this.props.children} />
  }

  patchHistoryQuery(history: any) {
    const historyListen = function() {
      history.location = Object.assign(history.location, {
        query: queryString.parse(history.location.search),
      })
    }
    history.listen(historyListen)
    historyListen()

    const originalPush = history.push
    history.push = function(path, state) {
      if (path.query) {
        if (path.keep) {
          path.query = Object.assign({}, history.location.query, path.query)
        }
        path.query = omitBy(path.query, v => v === undefined || v === '')
        path.search = queryString.stringify(path.query)
      }
      return originalPush(path, state)
    }
  }

  patchHistoryHashAnchor(history: any, timeout: number = 1000) {
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