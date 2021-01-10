import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Props {
  items: Array<{ label?: string; icon?: any; to?: string }>
  style?: Object
  className?: string
}

class TabBar extends React.Component<Props> {
  static Root: any

  render() {
    const { items } = this.props
    return (
      <Root {...this.props}>
        <div className="TabBar-items">
          {items.map((item, index) => {
            return (
              <NavLink
                key={index}
                className="TabBar-item"
                activeClassName="active"
                to={item.to || ''}
                exact
              >
                {item.icon}
                <div className="TabBar-label">{item.label}</div>
              </NavLink>
            )
          })}
        </div>
      </Root>
    )
  }
}

const Root = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid #e8e8e8;

  .TabBar-items {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .TabBar-item {
    cursor: pointer;
    flex: 1 1 0;
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

TabBar.Root = Root

export default TabBar
