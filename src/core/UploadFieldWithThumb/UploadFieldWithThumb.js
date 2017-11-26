import React from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons'
import { UploadField } from '@navjobs/upload'
import { isEqual } from 'lodash'

// <UploadFileWithThumb
//  value, onChange(file)    
//  accept: '.jpg,.png'
class UploadFieldWithThumb extends React.Component {
  static defaultProps = {
    onChange() {},  
  }

  state = {
    imageUrl: null
  }

  render() {
    const { accept } = this.props
    const { imageUrl } = this.state
    return (
      <Root>
        <UploadField
          onFiles={this.onFiles}
          uploadProps={{accept}}
        >
          {imageUrl ?
          <img src={imageUrl} /> :
          <div className='placeholder'>Upload Image</div>}
        </UploadField>
      </Root>
    )
  }

  componentDidMount() {
    this.setImageUrlFromValue(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setImageUrlFromValue(nextProps.value)
    }
  }

  setImageUrlFromValue(value) {
    if (!value) {
      return
    }
    const reader = new FileReader()
    reader.addEventListener('load', () => this.setState({imageUrl: reader.result}))
    reader.readAsDataURL(value)
  }

  onFiles = (files) => {
    const file = files[0]
    this.props.onChange(file)
  }
}

const Root = styled.div`
  .placeholder {
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.textDisabledOnBackground};
    cursor: pointer;
  }
`

export default UploadFieldWithThumb