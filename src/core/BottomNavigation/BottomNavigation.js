// @flow
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

class BottomNavigation extends React.Component {
  props: {
    items: [
      {
        label?: string,
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
        <div className="BottomNavigation-items">
          {items.map((item, index) => {
            return (
              <NavLink
                key={index}
                className="BottomNavigation-item"
                activeClassName="active"
                to={item.to || ''}
                exact
              >
                {item.icon}
                <div className="BottomNavigation-label">{item.label}</div>
              </NavLink>
            )
          })}
        </div>
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: white;

  .BottomNavigation-items {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .BottomNavigation-item {
    cursor: pointer;
    flex: 1;
    min-width: 80px;
    max-width: 168px;
    display: flex;
    padding: 6px 12px 10px 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &,
    &:hover,
    &:visited {
      color: ${p => p.theme.textIconOnBackground};
    }

    &.active {
      color: ${p => p.theme.primary};
    }

    & > .icon {
      width: 24px;
      height: 24px;
    }
  }
`

const Div = styled.div``

BottomNavigation.Root = Root

export default BottomNavigation
