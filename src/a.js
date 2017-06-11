import React from 'react'
import Guide from './Styleguide/Styleguide'
import Button from './Button/Button'

class Styleguide extends React.Component {
  render() {
    return (
      <Guide>
        <Guide.Section title="Basic">
          <Button>Button</Button>
        </Guide.Section>
      </Guide>
    )
  }
}

export default Styleguide
