import Select from 'react-select'
import { compose, withProps, defaultProps } from 'recompose'

/**
 * - Given options: [{value, label}]
 * - value and onChange(value) is value now, not option
 *
 * <SelectValue value onChange(value) />
 *   isMulti
 */
const SelectValue = compose<any, any>(
  defaultProps({
    getOptionValue: (v) => v.value,
  }),
  withProps((props: any) => {
    return {
      value: props.options.find((v) => props.getOptionValue(v) === props.value),
      onChange: (option) => {
        if (props.isMulti) {
          props.onChange(option.map((o) => props.getOptionValue(o)))
        } else {
          props.onChange(props.getOptionValue(option))
        }
      },
    }
  })
)(Select)

export default SelectValue
