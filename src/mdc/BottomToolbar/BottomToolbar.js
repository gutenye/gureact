import React from 'react'
import styled from 'styled-components'

class BottomToolbar extends React.Component {
  props: {
    items: {
      label: string,
      primary?: boolean,
      onClick?: Function,
    },
    style?: Object,
    className?: string,
  }

  render() {
    const { items } = this.props
    return (
      <Root {...this.props}>
        {items.map((item, index) =>
          <Item key={item.label} onClick={item.onClick} primary={item.primary}>
            {item.label}
          </Item>
        )}
      </Root>
    )
  }
}

const Root = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  height: 49px;
  background-color: white;
`

const Item = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    flex: 1;

    ${p =>
      p.primary &&
      `
        flex: none;
        padding: 0 16px;
        color: ${p.theme.textPrimaryOnPrimary};
        background: ${p.theme.primary};
      `}
  }
`

BottomToolbar.Root = Root

export default BottomToolbar
