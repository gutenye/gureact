import React from 'react'
import { ThemeProvider } from 'styled-components'
import { times } from 'lodash'
import Guide from '../core/Styleguide/Styleguide'
import GridListItem from './GridListItem/GridListItem'
import GridListItemWithPrice from './GridListItemWithPrice/GridListItemWithPrice'
import GridListItemWithDescription from './GridListItemWithDescription/GridListItemWithDescription'
import theme from '../theme'

class Styleguide extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Guide>
          <Guide.Section title="GridListItem" style={{ width: '200px' }}>
            <GridListItem
              name="Netgear Orbi"
              priceDisplay="¥2200"
              image="/images/product1.jpg"
            />
            <GridListItemWithPrice
              priceDisplay="¥2200"
              image="/images/product1.jpg"
            />
            <GridListItemWithDescription
              name="Netgear Orbi"
              image="/images/product1.jpg"
            />
          </Guide.Section>
        </Guide>
      </ThemeProvider>
    )
  }
}

export default Styleguide
