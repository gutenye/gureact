import React from 'react'
import StyleguideRoot from '../StyleguideRoot'
import { times } from 'lodash'
import Guide from '../core/Guide/Guide'
import GridListItem from './GridListItem/GridListItem'
import GridListItemWithPrice from './GridListItemWithPrice/GridListItemWithPrice'
import GridListItemWithDescription from './GridListItemWithDescription/GridListItemWithDescription'

class Styleguide extends React.Component {
  render() {
    return (
      <StyleguideRoot>
        <Guide>
          <Guide.Artboard title="GridListItem" style={{ width: '200px' }}>
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
          </Guide.Artboard>
        </Guide>
      </StyleguideRoot>
    )
  }
}

export default Styleguide
