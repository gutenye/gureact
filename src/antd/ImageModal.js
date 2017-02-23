import React from 'react'
import { injectGlobal } from 'styled-components'
import { Modal } from 'antd'

injectGlobal`
  .ImageModal {
    .ant-modal-body {
      padding: 0;
      line-height: 0;      /* remove a whitespace bug */
    }
  }
`

//
// <ImageModal visible onCancel width />
//   <img />
// <ImageModal>
//
class ImageModal extends React.Component {
  render() {
    return (
      <Modal
        className='ImageModal'
        footer={null}
        {...this.props}
      >
        {this.props.children}
      </Modal>
    )
  }
}

export default ImageModal
