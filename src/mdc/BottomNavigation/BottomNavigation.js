// @flow
import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { Link } from 'react-router-dom'

class BottomNavigation extends React.Component {
  props: {
    items: [
      {
        label: string,
        icon?: any,
        to?: string,
      },
    ],
    style?: Object,
    className?: string,
  }

  state = {
    selectedIndex: 0,
  }

  render() {
    const { items } = this.props
    const { selectedIndex } = this.state
    return (
      <Root {...this.props}>
        {items.map((item, index) => {
          const Cmp = item.to ? Link : Div
          return (
            <Cmp
              className={cx('BottomNavigation-item', {
                active: selectedIndex === index,
              })}
              key={item.label}
              onClick={this.onClick(index)}
              to={item.to}
            >
              {item.label}
            </Cmp>
          )
        })}
      </Root>
    )
  }

  onClick = selectedIndex => {
    return () => {
      this.setState({ selectedIndex })
    }
  }
}

const Root = styled.div`
  display: flex;
  height: 49px;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;

  .BottomNavigation-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.active {
      color: ${p => p.theme.primary};
    }
  }
`

const Div = styled.div``

BottomNavigation.Root = Root

export default BottomNavigation
