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
          <Guide.Artboard title="Layout" />
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
