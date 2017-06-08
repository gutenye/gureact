import React from 'react'
import Guide from './guide'
import Button from './Button/Button'

class Styleguide extends React.Component {
  render() {
    return (
      <Guide>
        <Guide.Section title="Buttons">
          <Button>button</Button>
        </Guide.Section>
        <Guide.Section title="Basic">
          <Button>button</Button>
        </Guide.Section>
      </Guide>
    )
  }
}

export default Styleguide
