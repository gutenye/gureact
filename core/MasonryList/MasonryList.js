import React from 'react'
import styled from 'styled-components'

class MasonryList extends React.Component {
  props: {
    /** '100px' '3' */
    columns: string,
    gutter?: number,
    className?: string,
    style?: Object,
    children: any,
  }

  static defaultProps = {
    gutter: 10,
  }

  render() {
    const { children } = this.props
    return (
      <Root {...this.props}>
        {children.map((v, i) => (
          <div className="item" key={i}>
            {v}
          </div>
        ))}
      </Root>
    )
  }
}

const Root = styled.div`
  columns: ${p => p.columns};
  column-gap: ${p => p.gutter};

  > .item {
    break-inside: avoid;
    margin-bottom: ${p => p.gutter};
  }
`

export default MasonryList
