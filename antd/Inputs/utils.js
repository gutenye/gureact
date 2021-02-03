// @flow
import { compact } from 'lodash'

export function stringQuerier(obj) {
  obj.parseQuery = (str) => str
  obj.toQuery = (str) => str
  obj.trim = (str) => str.trim()
  return obj
}

export function arrayQuerier(obj) {
  obj.parseQuery = (str) => compact(str.split(','))
  obj.toQuery = (ary) => ary.join(',')
  obj.trim = (ary) => ary.map((v) => v.trim())
  return obj
}

export function numberQuerier(obj) {
  obj.parseQuery = (str) => parseInt(str, 10)
  obj.toQuery = (num) => num
  obj.trim = (num) => num
  return obj
}
