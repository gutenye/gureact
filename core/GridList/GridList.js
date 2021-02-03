// @flow
import React from 'react'
import styled from 'styled-components'

class GridList extends React.Component {
  props: {
    gutter: number,
    className?: string,
    children: any,
  }

  static defaultProps = {
    gutter: 10,
  }

  render() {
    const { className, children } = this.props
    return (
      <Root className={className} {...this.props}>
        {children.map((v, i) => (
          <div key={i} className="item">
            {v}
          </div>
        ))}
      </Root>
    )
  }
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > .item {
    padding: ${(p) => p.gutter}px;
    width: 50%;
    max-width: 200px;
  }
`

export default GridList
