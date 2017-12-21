// @flow
import React from 'react'
import styled from 'styled-components'
import { UploadField } from '@navjobs/upload'

// <UploadFileWithThumb
//  value=null | file, onChange(file), onLoad(img), onLoadedMetadata(video)
//  ---
//  placeholder: 'Upload'
//  accept: '.jpg,.png,.mov'
//  className style width

type Value = null | string | File

type Props = {
  value: Value,
  onChange: Function,
  onLoad: Function,
  onLoadedMetadata: Function,
  placeholder?: string,
  accept?: string,
  className?: string,
  style?: Object,
  width?: number,
}

type State = {
  mediaUrl: ?string,
  mediaType: ?string,
}

class UploadFieldWithThumb extends React.Component<Props, State> {
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

  videoEl: ?HTMLVideoElement

  render() {
    const { accept, placeholder, className, style, width } = this.props
    const { mediaUrl, mediaType } = this.state
    let field
    if (mediaUrl && mediaType === 'image')
      field = (
        <img
          src={mediaUrl}
          onLoad={e => {
            URL.revokeObjectURL(mediaUrl)
            this.props.onLoad(e.target)
          }}
        />
      )
    else if (mediaUrl && mediaType === 'video')
      field = (
        <video
          src={mediaUrl}
          ref={v => (this.videoEl = v)}
          controls
          onLoadedMetadata={e => {
            URL.revokeObjectURL(mediaUrl)
            this.props.onLoadedMetadata(e.target)
          }}
        />
      )
    else field = <div className="placeholder">{placeholder}</div>

    return (
      <Root {...{ className, style, width }}>
        <UploadField onFiles={this.onFiles} uploadProps={{ accept }}>
          {field}
        </UploadField>
      </Root>
    )
  }

  componentDidMount() {
    this.setImageUrlFromValue(this.props.value)
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value) {
      this.setImageUrlFromValue(nextProps.value)
    }
  }

  setImageUrlFromValue(value: Value) {
    if (value instanceof File) {
      const mediaType = value.type.split('/')[0]
      const mediaUrl = URL.createObjectURL(value)
      this.setState({ mediaUrl, mediaType })
    }
  }

  onFiles = (files: Array<File>) => {
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
