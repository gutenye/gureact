import { React } from './vendor'
import { injectGlobal } from 'styled-components'
import { Modal } from 'antd'

injectGlobal`
  .PreviewModal {
    .ant-modal-body {
      padding: 0;
      img {
        vertical-align: bottom;
      }
    }
  }
`

// PreviewModal: without padding and footer
//
// <PreviewModal width visible onCancel />
//   <img />
// <PreviewModal>
//
class PreviewModal extends React.Component {
  render() {
    return (
      <Modal
        className='PreviewModal'
        footer={null}
        {...this.props}
      >
        {this.props.children}
      </Modal>
    )
  }
}

export default PreviewModal
