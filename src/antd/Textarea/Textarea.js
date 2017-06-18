import { Input } from 'antd'
import { compose, defaultProps } from 'recompose'

const AntdTextarea = compose(
  defaultProps({
    type: 'textarea'
  })
)(Input)

export default AntdTextarea
