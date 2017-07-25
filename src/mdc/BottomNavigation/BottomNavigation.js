// @flow
import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'

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
          return (
            <NavLink
              key={item.label}
              className="BottomNavigation-item"
              activeClassName="active"
              to={item.to}
              exact
            >
              {item.label}
            </NavLink>
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
  left: 0;
  right: 0;

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
