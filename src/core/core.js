import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import Guide from './Guide/Guide'
import Button from './Button/Button'
import GridList from './GridList/GridList'
import MasonryList from './MasonryList/MasonryList'
import Placeholder from './Placeholder/Placeholder'
import { times } from 'lodash'
import theme from '../theme'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Artboard title="Basic">
            <Button primary>Button</Button>
          </Guide.Artboard>

          <Guide.Artboard title="Data Display" style={{ width: '320px' }}>
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
          </Guide.Artboard>
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
