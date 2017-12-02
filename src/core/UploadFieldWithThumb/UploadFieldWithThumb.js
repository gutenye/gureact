import React from 'react'
import styled from 'styled-components'
import { UploadField } from '@navjobs/upload'
import { isEqual } from 'lodash'

// <UploadFileWithThumb
//  value, onChange(file), onLoad(img), onLoadedMetadata(video)
//  ---
//  placeholder: 'Upload'
//  accept: '.jpg,.png,.mov'
//  className style width
class UploadFieldWithThumb extends React.Component {
  static defaultProps = {
    className: '',
    placeholder: 'Upload',
    onChange() {},
    onLoadedMetadata() {},
    onLoad() {},
  }

  state = {
    mediaUrl: null,
    mediaType: null,
  }

  render() {
    const {
      value,
      accept,
      placeholder,
      onChange,
      className,
      style,
      width,
    } = this.props
    const { mediaUrl, mediaType } = this.state
    return (
      <Root {...{ className, style, width }}>
        <UploadField onFiles={this.onFiles} uploadProps={{ accept }}>
          {mediaUrl ? (
            mediaType === 'image' ? (
              <img
                src={mediaUrl}
                onLoad={e => {
                  URL.revokeObjectURL(mediaUrl)
                  this.props.onLoad(e.target)
                }}
              />
            ) : (
              <video
                src={mediaUrl}
                controls
                onLoadedMetadata={e => {
                  URL.revokeObjectURL(mediaUrl)
                  this.props.onLoadedMetadata(e.target)
                }}
              />
            )
          ) : (
            <div className="placeholder">{placeholder}</div>
          )}
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
    const mediaType = value.type.split('/')[0]
    const mediaUrl = URL.createObjectURL(value)
    this.setState({ mediaUrl, mediaType })
  }

  onFiles = files => {
    const file = files[0]
    this.props.onChange(file)
  }
}

const Root = styled.div`
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  & > div {
    width: 100%;
    height: 100%;
  }

  .placeholder {
    width: 100%;
    height: ${p => (p.width ? `${p.width}px` : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.textDisabledOnBackground};
    border: 1px solid ${p => p.theme.textDisabledOnBackground};
    cursor: pointer;
  }
`

export default UploadFieldWithThumb
