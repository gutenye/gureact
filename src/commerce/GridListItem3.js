import React from 'react'
import styled from 'styled-components'

class GridListItem3 extends React.Component {
  render() {
    const { image, description, price, className, style } = this.props
    return (
      <Root className={className} style={style}>
        <img src={image} />
        <div className="description">
          <div>{description}</div>
          <div>¥{price}</div>
        </div>
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;

  .description {
    padding: 0 5px;
  }
`
export default GridListItem3
