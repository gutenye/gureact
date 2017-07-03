import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import Guide from '../core/Guide/Guide'
import BottomNavigation from './BottomNavigation/BottomNavigation'
import BottomToolbar from './BottomToolbar/BottomToolbar'
import Toolbar from './Toolbar/Toolbar'
import { times } from 'lodash'
import theme from '../theme'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Artboard title="Layout">
            <Toolbar back title="Toolbar" />
            <BottomNavigation
              items={[
                { label: 'Bottom' },
                { label: 'Navigation' },
                { label: 'Me' },
              ]}
              style={{ position: 'relative' }}
            />
            <BottomToolbar
              items={[
                { label: 'Bottom' },
                { label: 'Toolbar' },
                { label: 'Add to Cart', primary: true },
              ]}
              style={{ position: 'relative', marginTop: 10 }}
            />
          </Guide.Artboard>
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
