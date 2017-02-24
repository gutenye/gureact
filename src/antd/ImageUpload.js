import React from 'react'
import styled from 'styled-components'
import { Upload } from 'antd'
import { MdCreate, MdVisibility } from 'react-icons/lib/md'

//
// <ImageUpload size>upload
//
class ImageUpload extends React.Component {
  state = {
    //imageUrl: null
    imageUrl: true
  }

  render() {
    const {imageUrl} = this.state
    const uploadProps = {
      showUploadList: false,
      beforeUpload: (file) => {
        const imageUrl = URL.createObjectURL(file)
        this.setState({imageUrl})
      }
    }

    return (
      <Root>
        <Upload className='upload' {...uploadProps} {...this.props}>
          {imageUrl ?
            <div>
              <img className='image' src={imageUrl} alt='' />
              <div className='overlay'>
                <MdCreate />
                <MdVisibility />
              </div>
            </div> :
            <span className='trigger'>{this.props.children}</span>
          }
        </Upload>
      </Root>
    )
  }
}

const Root = styled.div`
  .upload,
  .trigger,
  .image {
    width: 150px;
    height: 150px;
  }

  .upload {
    display: block;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
  }

  .trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }

  .overlay {
    background: rgba(49,55,61,0.75);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .upload:hover .overlay {
    opacity: 1;
  }
`


export default ImageUpload
