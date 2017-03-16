import { compose, withState, withProps, lifecycle } from 'recompose'
import { set, compact } from 'lodash'

// <Input record field />
export const addUpdateViaRecord = compose(
  withState('value', 'setValue', props => props.record[props.field]),
  withProps(props => ({
    onChange: (value) => {
      set(props.record, props.field, value)
      if (props.onChange)
        props.onChange(value)
      props.setValue(value)
    }
  })),
  lifecycle({
    componentWillReceiveProps(next) {
      this.setState({value: next.record[next.field]})
    }
  })
)

export function stringQuerier(obj) {
  obj.parseQuery = (str) => str
  obj.toQuery = (str) => str
  obj.trim = (str) => str.trim()
  return obj
}

export function arrayQuerier(obj) {
  obj.parseQuery = (str) => compact(str.split(','))
  obj.toQuery = (ary) => ary.join(',')
  obj.trim = (ary) => ary.map(v => v.trim())
  return obj
}

export function numberQuerier(obj) {
  obj.parseQuery = (str) => parseInt(str, 10)
  obj.toQuery = (num) => num
  obj.trim = (num) => num
  return obj
}
