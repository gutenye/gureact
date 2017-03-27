import React, { styled } from '../vendor'
import { Upload } from 'antd'
import { MdCreate, MdVisibility } from 'react-icons'
import PreviewModal from '../PreviewModal'

// <ImageUpload>
//    children: 'Upload Image'
//    value onChange(value) valueExtractor(response)    // by default value is response.path
//    action: '/upload'
//    ---
//    name: 'file'*
//    onUpload(info)
//
class ImageUpload extends React.Component {
  static defaultProps = {
    onChange: () => {},
    valueExtractor: (response) => response.path,
    onUpload: () => {},
  }

  state = {
    isPreviewOpen: false,
  }

  render() {
    const {value} = this.props
    const {isPreviewOpen} = this.state
    const uploadProps = {
      ...this.props,
      showUploadList: false,
      onChange: (info) => {
        if (info.file.status === 'done') {
          this.props.onChange(this.props.valueExtractor(info.file.response))
        }
        this.props.onUpload(info)
      }
    }
    return (
      <Root>
        <div className='upload'>
          {value ?
          <div className='filled'>
            <img className='thumb' src={value} alt='' />
            <div className='overlay'>
              <MdVisibility onClick={this.openPreview} />
              <Upload {...uploadProps}>
                <MdCreate />
              </Upload>
            </div>
          </div> :
          <Upload className='empty' {...uploadProps}>{this.props.children}</Upload>
          }
        </div>
        <PreviewModal width='512' visible={isPreviewOpen} onCancel={this.closePreview}>
          <img src={value} alt='' />
        </PreviewModal>
      </Root>
    )
  }

  openPreview = () => {
    this.setState({isPreviewOpen: true})
  }

  closePreview = () => {
    this.setState({isPreviewOpen: false})
  }

  openUpload = () => {
  }
}

const HEIGHT = 240
const Root = styled.div`
  width: 240px;
  height: ${HEIGHT}px;

  img {
    max-width: 100%;
    vertical-align: bottom;
  }

  .upload .empty {
    display: block;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;

    .ant-upload {
      width: 100%;
      height: ${HEIGHT}px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
    }
  }

  .upload .filled {
    position: relative;

    .overlay {
      background: rgba(49,55,61,0.75);
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: space-around;

      > * {
        width: 30%;
        height: 30%;
        cursor: pointer;
      }

      .ant-upload, .ant-upload .icon {
        width: 100%;
        height: 100%;
      }
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

`


export default ImageUpload