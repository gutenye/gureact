// @flow
import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

class BottomNavigation extends React.Component {
  props: {
    items: [
      {
        label: string,
        icon?: any,
        to: string,
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
        {items.map((item, index) =>
          <div
            className={cx('BottomNavigation-item', {
              active: selectedIndex === index,
            })}
            key={item.label}
            onClick={this.onClick(index)}
          >
            {item.label}
          </div>
        )}
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

BottomNavigation.Root = Root

export default BottomNavigation
