import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd-mobile'

// ModalWithComponent.open({
//   component, props
//   onOk, onCancel, onClose,
//   ...rest
// })
//
// ModalWithComponent.ok()
// ModalWithComponent.cancel()
// ModalWithComponent.close()
class ModalWithComponent extends React.Component {
  render() {
    const { component: Component, close, props, ...rest } = this.props
    return (
      <Modal visible onClose={close} {...rest}>
        <Component {...props} />
      </Modal>
    )
  }
}

ModalWithComponent.open = function(options) {
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
  ModalWithComponent.close = close
  ModalWithComponent.ok = () => {
    close({ isOk: true })
  }
  ModalWithComponent.cancel = close

  const { onOpen, onOk, onCancel, onClose, ...rest } = options
  options.onOpen()
  ReactDOM.render(<ModalWithComponent {...rest} close={close} />, div)
}

export default ModalWithComponent
