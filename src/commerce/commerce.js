import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import { times } from 'lodash'
import Guide from '../core/Styleguide/Styleguide'
import GridListItem from './GridListItem/GridListItem'
import GridListItemWithPrice from './GridListItemWithPrice/GridListItemWithPrice'
import GridListItemWithDescription from './GridListItemWithDescription/GridListItemWithDescription'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
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
      </StyleguideRoot>
    )
  }
}

export default Styleguide
