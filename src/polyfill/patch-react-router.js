// @flow
import createBrowserHistory from 'history/createBrowserHistory'
import {
  parseQueryString,
  toQueryString,
} from './URLSearchParams'
import { omitBy } from 'lodash'

export const history = createBrowserHistory()

function historyListen() {
  history.location = Object.assign(history.location, {
    query: parseQueryString(history.location.search),
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
      path.query = Object.assign({}, history.location.query, path.query)
    }
    path.query = omitBy(path.query, v => v === '')
    path.search = toQueryString(path.query)
  }
  return originalPush(path, state)
}
