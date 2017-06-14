import React from 'react'
import Guide from './Styleguide/Styleguide'
import Button from './Button/Button'
import GridList from './GridList/GridList'
import DesignImage from './DesignImage/DesignImage'
import { times } from 'lodash'

class Styleguide extends React.Component {
  render() {
    return (
      <Guide>
        <Guide.Section title="Data Display">
          <div style={{ width: 300 }}>
            <GridList>
              {times(4).map(v => <DesignImage key={v} />)}
            </GridList>
          </div>
        </Guide.Section>

        <Guide.Section title="Basic">
          <Button>Button</Button>
        </Guide.Section>
      </Guide>
    )
  }
}

export default Styleguide
