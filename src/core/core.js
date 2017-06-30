import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import Guide from './Styleguide/Styleguide'
import Button from './Button/Button'
import GridList from './GridList/GridList'
import MasonryList from './MasonryList/MasonryList'
import Placeholder from './Placeholder/Placeholder'
import BottomNavigation from './BottomNavigation/BottomNavigation'
import Toolbar from './Toolbar/Toolbar'
import { times } from 'lodash'
import theme from '../theme'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Section title="Basic">
            <Button primary>Button</Button>
          </Guide.Section>

          <Guide.Section title="Data Display" style={{ width: '320px' }}>
            <h3>GridList</h3>
            <GridList>
              {times(4).map(v => <Placeholder key={v} />)}
            </GridList>

            <h3>MasonryList</h3>
            <MasonryList
              columns="100px"
              gutter="10px"
              style={{ width: '320px' }}
            >
              {times(5).map(v =>
                <Placeholder width="100%" height="random" key={v} />
              )}
            </MasonryList>
          </Guide.Section>

          <Guide.Section title="Layout">
            <Toolbar>Toolbar</Toolbar>
            <BottomNavigation
              items={[{ label: 'Home' }, { label: 'Explore' }, { label: 'Me' }]}
            />
          </Guide.Section>
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
