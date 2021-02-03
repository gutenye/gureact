import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Form, Modal, Button } from 'antd'

// CustomModal.open({
//   component: Button,
//   onOk, onCancel, onClose,
//   <rest>          // passed to component
// })
//
// CustomModal.ok()
// CustomModal.cancel()
// CustomModal.close()
class CustomModal extends React.Component {
  render() {
    const { component: Component, close, ...rest } = this.props
    return (
      <Modal visible footer={null} onCancel={close}>
        <Component {...rest} />
      </Modal>
    )
  }
}

CustomModal.open = function (options) {
  options = Object.assign(
    {
      onOpen() {},
      onOk() {},
      onCancel() {},
      onClose() {},
    },
    options
  )

  const div = document.createElement('div')
  document.body.appendChild(div)

  function close(arg) {
    arg && arg.isOk ? options.onOk() : options.onCancel()
    options.onClose()
    const unmountResult = ReactDOM.unmountComponentAtNode(div)
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  CustomModal.close = close
  CustomModal.ok = () => {
    close({ isOk: true })
  }
  CustomModal.cancel = close

  const { onOpen, onOk, onCancel, onClose, ...rest } = options
  options.onOpen()
  ReactDOM.render(<CustomModal {...rest} close={close} />, div)
}

export default CustomModal
