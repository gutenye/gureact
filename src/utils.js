import { omitBy, isNil, forOwn } from 'lodash'

// {a: 1, b: 2} -> 'a=1&b=2'
export function toSearchString(obj: { [string]: any }) {
  const search = new URLSearchParams()
  forOwn(omitBy(obj, isNil), (v, k) => search.append(k, v))
  return search.toString()
}
