import React, { styled } from './vendor'
import { Upload } from 'antd'
import { MdCreate, MdVisibility } from 'react-icons/lib/md'
import PreviewModal from './PreviewModal'

//
// <ImageUpload size>upload
//
class ImageUpload extends React.Component {
  state = {
    //imageUrl: null,
    imageUrl: 'http://placeholder.cn/512',
    isPreviewOpen: false,
  }

  render() {
    const {imageUrl, isPreviewOpen} = this.state
    const uploadProps = {
      showUploadList: false,
      beforeUpload: (file) => {
        const imageUrl = URL.createObjectURL(file)
        this.setState({imageUrl})
      }
    }
    return (
      <Root>
        <div className='upload'>
          {imageUrl ?
          <div className='filled'>
            <img className='thumb' src={imageUrl} alt='' />
            <div className='overlay'>
              <MdVisibility onClick={this.openPreview} />
              <Upload {...uploadProps} {...this.props}>
                <MdCreate />
              </Upload>
            </div>
          </div> :
          <Upload className='empty' {...uploadProps} {...this.props}>
            <span className='trigger'>{this.props.children}</span>
          </Upload>
          }
        </div>
        <PreviewModal width='512' visible={isPreviewOpen} onCancel={this.closePreview}>
          <img src={imageUrl} alt='' />
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

const Root = styled.div`
  img {
    max-width: 100%;
    vertical-align: bottom;
  }

  .upload {
    width: 150px;
    height: 150px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }

  .upload .empty {
    display: block;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
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
