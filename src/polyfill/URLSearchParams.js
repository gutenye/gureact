import { fromPairs, reduce, omitBy, isNil } from 'lodash'

export function toQueryString(obj) { return reduce(omitBy(obj, isNil), (r, v, k) => r += `${k}=${v}&`, '').slice(0, -1) }
export function parseQueryString(str) { return fromPairs([...new URLSearchParams(str)]) }