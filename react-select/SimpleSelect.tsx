import Select from 'react-select'
import { compose, withProps } from 'recompose'

/**
 * <SelectSimple value onChange(value) getOptionValue />
 *   isMulti
 */
const SelectSimple = compose<any, any>(
  withProps((props: any) => {
    return {
      value: props.options.find(v => props.getOptionValue(v) === props.value),
      onChange: option => {
        if (props.isMulti) {
          props.onChange(option.map(o => props.getOptionValue(o)))
        } else {
          props.onChange(props.getOptionValue(option))
        }
      },
    }
  })
)(Select)

export default SelectSimple
