// @flow
// prettier-ignore
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

class BottomToolbar extends React.Component {
  props: {
    items: {
      label: string,
      primary?: boolean,
      onClick?: Function,
      to?: string,
    },
    style?: Object,
    className?: string,
  }

  render() {
    const { items } = this.props
    return (
      <Root {...this.props}>
        {items.map((item, index) => {
          const Cmp = item.to ? ItemWithLink : Item
          return (
            <Cmp
              key={item.label}
              onClick={item.onClick}
              primary={item.primary}
              to={item.to}
            >
              {item.label}
            </Cmp>
          )
        })}
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

const ItemStyle = css`
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

// prettier-ignore
const Item = styled.div`
  ${ItemStyle}
`

const ItemWithLink = styled(Link)`
  ${ItemStyle}
`

BottomToolbar.Root = Root

export default BottomToolbar
