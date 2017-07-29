import { fromPairs, omitBy, isNil, forOwn } from 'lodash'

// {a: 1, b: 2} -> 'a=1&b=2'
export function toSearchString(obj: Object) {
  const search = new URLSearchParams()
  forOwn(omitBy(obj, isNil), (v, k) => search.append(k, v))
  return search.toString()
}

// '?a=1&b=2' -> {a: 1, b: 2}
export function parseSearchString(str: string) {
  return fromPairs(Array.from(new URLSearchParams(str)))
}
