import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Guide from '../core/Styleguide/Styleguide'

import ImageUpload from './ImageUpload/ImageUpload'

class Styleguide extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Guide>
          <Guide.Section title="Form">
            <ImageUpload>Upload Image</ImageUpload>
          </Guide.Section>
          <Guide.Section title="More" />
        </Guide>
      </BrowserRouter>
    )
  }
}

export default Styleguide
