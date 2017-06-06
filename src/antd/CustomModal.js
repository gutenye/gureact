import React, { styled } from './vendor'
import ReactDOM from 'react-dom'
import { Form, Modal, Button } from 'antd'

// CustomModal.open({
//   component: Button,
//   <prop>
// })
// CustomModal.close()
class CustomModal extends React.Component {
  render() {
    const {component:Component, close, ...rest} = this.props
    return (
      <Modal visible footer={null} onCancel={close}>
        <Component {...rest} />
      </Modal>
    )
  }
}

CustomModal.open = function(options) {
  let div = document.createElement('div')
  document.body.appendChild(div)

  function close() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  CustomModal.close = close

  ReactDOM.render(<CustomModal {...options} close={close} />, div)
}

export default CustomModal
