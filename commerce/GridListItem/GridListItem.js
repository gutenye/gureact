// @flow
import React from 'react'
import styled from 'styled-components'

class GridListItem extends React.Component {
  props: {
    image: string,
    name: string,
    /** ¥2200 */
    priceDisplay?: string,
    className?: string,
    style?: Object,
  }

  render() {
    const { image, name, priceDisplay, className, style } = this.props
    return (
      <Root className={className} style={style}>
        <img src={image} alt="product" />
        <div className="description">
          <div className="name">{name}</div>
          {priceDisplay && <div className="priceDisplay">{priceDisplay}</div>}
        </div>
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;

  .description {
    padding: 10px 5px;

    .priceDisplay {
      margin-top: 10px;
      color: ${(p) => p.theme.primary};
      font-weight: bold;
    }
  }
`
export default GridListItem
