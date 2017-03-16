import { Input } from 'antd'
import { compose, defaultProps } from 'recompose'

export default compose(
  defaultProps({
    type: 'textarea'
  })
)(Input)
