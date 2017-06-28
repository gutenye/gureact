import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import Guide from '../core/Styleguide/Styleguide'
import ImageUpload from './ImageUpload/ImageUpload'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Section title="Form">
            <ImageUpload>Upload Image</ImageUpload>
          </Guide.Section>
          <Guide.Section title="More" />
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
