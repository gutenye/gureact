// @flow
// prettier-ignore
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { findIndex, omit } from 'lodash'

/**
 * <BottomToolbar
 *  items=[
 *    { label: 'Favourite' }
 *    { label: 'Add to Cart', primary: true, align: 'end' }
 *  ]
 */
class BottomToolbar extends React.Component {
  props: {
    items: {
      label: string,
      primary?: boolean,
      onClick?: Function,
      to?: string,
      /** needs above BottomNativation bar */
      lift?: boolean,
    },
    style?: Object,
    className?: string,
  }

  render() {
    const { items } = this.props
    return (
      <Root {...this.props}>
        {items.map((item, index) => {
          let marginLeft = 'initial'
          // first time occurs align: 'end': add margin-left: 'auto'
          if (
            item.align === 'end' &&
            findIndex(items, { align: 'end' }) === index
          )
            marginLeft = 'auto'

          const Cmp = item.to ? ItemWithLink : Item
          return (
            <Cmp
              key={item.label}
              onClick={item.onClick}
              primary={item.primary}
              to={item.to}
              marginLeft={marginLeft}
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
  bottom: ${(p) => (p.lift ? '49px' : 0)};
  left: 0;
  right: 0;

  display: flex;
  height: 49px;
  background-color: white;
`

const ItemStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    margin-left: ${(p) => p.marginLeft};
    padding: 0 16px;

    ${(p) =>
      p.primary &&
      `
        color: ${p.theme.textPrimaryOnPrimary};
        background: ${p.theme.primary};
      `}
  }
`

// prettier-ignore
const Item = styled.div`
  ${ItemStyle}
`

const ItemWithLink = styled((p) => (
  <Link {...omit(p, ['primary', 'marginLeft'])} />
))`
  ${ItemStyle}
`

BottomToolbar.Root = Root

export default BottomToolbar
