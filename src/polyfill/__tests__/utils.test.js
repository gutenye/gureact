import { toSearchString, parseSearchString } from '../utils'

it('#toSearchString', () => {
  expect(toSearchString({ a: 1, b: 2 })).toEqual('a=1&b=2')
})
