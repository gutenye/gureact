import React from 'react'
import styled from 'styled-components'

class GridListItemWithPrice extends React.Component {
  render() {
    const { image, price, className, style } = this.props
    return (
      <Root className={className} style={style}>
        <img src={image} alt="product" />
        <div className="price">
          {price}
        </div>
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;

  .price {
    position: absolute;
    bottom: 5px;
    right: 10px;

    background: rgba(0,0,0,0.4);
    border-radius: 2px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 22px;
    height: 22px;
    padding: 0 5px;
  }
`
export default GridListItemWithPrice
