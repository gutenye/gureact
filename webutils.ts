import { fromPairs, omitBy, isNil, forOwn } from 'lodash'

// getImageInfo(file).then({width, height})
export function getImageInfo(file) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      URL.revokeObjectURL(image.src)
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
      })
    })
    image.src = URL.createObjectURL(file)
  })
}

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
