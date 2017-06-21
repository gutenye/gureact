import React from 'react'
import styled from 'styled-components'

class GridListItem2 extends React.Component {
  render() {
    const { image, description, className, style } = this.props
    return (
      <Root className={className} style={style}>
        <img src={image} />
        <div className="description">
          {description}
        </div>
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;

  .description {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2rem;
    line-height: 2rem;

    background: #212121;
    padding: 0 5px;
    color: white;
  }
`
export default GridListItem2
