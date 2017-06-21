import React from 'react'
import Guide from '../core/Styleguide/Styleguide'
import GridListItem from './GridListItem'
import GridListItem2 from './GridListItem2'
import { times } from 'lodash'

class Styleguide extends React.Component {
  render() {
    return (
      <Guide>
        <Guide.Section title="GridListItem" style={{ width: '200px' }}>
          <GridListItem price="2200" image="/images/product1.jpg" />
          <GridListItem2
            description="Netgear Orbi"
            image="/images/product1.jpg"
          />
          <GridListItem3
            description="Netgear Orbi"
            price="2200"
            image="/images/product1.jpg"
          />
        </Guide.Section>
      </Guide>
    )
  }
}

export default Styleguide
