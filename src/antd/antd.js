import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import Guide from '../core/Guide/Guide'
import ImageUpload from './ImageUpload/ImageUpload'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Artboard title="Form">
            <ImageUpload>Upload Image</ImageUpload>
          </Guide.Artboard>
          <Guide.Artboard title="More" />
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
