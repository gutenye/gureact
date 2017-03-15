import React from './vendor'
import { InputNumber } from 'antd'
import { compose, withState, withProps, lifecycle } from 'recompose'
import { set } from 'lodash'

// <SetNumber record field />

const AddUpdateObject = compose(
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

export const SetNumber = AddUpdateObject(props => <InputNumber {...props} />)
