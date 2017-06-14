import React from 'react'
import Guide from './Styleguide/Styleguide'
import Button from './Button/Button'
import GridList from './GridList/GridList'
import MasonryList from './MasonryList/MasonryList'
import Placeholder from './Placeholder/Placeholder'
import { times } from 'lodash'

class Styleguide extends React.Component {
  render() {
    return (
      <Guide>
        <Guide.Section title="Data Display">
          <div style={{ width: 300 }}>
            <h3>GridList</h3>
            <GridList>
              {times(4).map(v => <Placeholder key={v} />)}
            </GridList>

            <h3>MasonryList</h3>
            <MasonryList columns="100px">
              {times(5).map(v =>
                <Placeholder width="100%" height="random" key={v} />
              )}
            </MasonryList>
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
