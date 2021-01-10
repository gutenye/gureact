import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd-mobile'
import { merge } from 'lodash'

interface Props {
  component: any
  [key: string]: any
  modal: any
}

/**
 * ModalWithComponent.open({
 *   component, ...rest          //-> pass to Component
 *   modal: {                    //-> pass to Modal
 *     onOpen, onClose(isOk),
 *     transparent                       // standalone, default is fullscreen.
 *     popup, animationType='slide-up'   // like Action-sheet
 * })
 * ModalWithComponent.ok()       // invoke onClose(true)
 * ModalWithComponent.close()    // invoke onClose(false)
 *
 * Only for display data, not input data, for value, onChange is not work.
 * for input: use <Modal ...><Component ... /></Modal>
 */
class ModalWithComponent extends React.Component<Props> {
  static open: Function
  static close: Function
  static ok: Function
  static cancel: Function

  render() {
    const { component: Component, modal, ...rest } = this.props
    return (
      <Modal visible {...modal}>
        <Component {...rest} />
      </Modal>
    )
  }
}

ModalWithComponent.open = function(options) {
  options = merge(
    {
      modal: {
        onOpen() {},
        onClose() {},
      },
    },
    options
  )

  const div = document.createElement('div')
  document.body.appendChild(div)

  function close() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div)
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  ModalWithComponent.close = () => {
    options.modal.onClose(false)
    close()
  }
  ModalWithComponent.ok = () => {
    options.modal.onClose(true)
    close()
  }
  ModalWithComponent.cancel = close

  options.modal.onOpen()
  delete options.modal.onOpen
  options.modal.onClose = close
  ReactDOM.render(<ModalWithComponent {...options} />, div)
}

export default ModalWithComponent
