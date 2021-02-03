// @flow
import { set } from 'lodash'
import { compose, withState, withProps, lifecycle } from 'recompose'

// <Input record name />
export const addUpdateViaRecord = compose(
  withState('value', 'setValue', (props) => props.record[props.name]),
  withProps((props) => ({
    onChange: (value) => {
      set(props.record, props.name, value)
      if (props.onChange) props.onChange(value)
      props.setValue(value)
    },
  })),
  lifecycle({
    componentWillReceiveProps(next) {
      this.setState({ value: next.record[next.name] })
    },
  })
)
