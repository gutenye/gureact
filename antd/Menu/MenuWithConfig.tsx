import React from 'react'
import { Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { Link } from 'react-router-dom'

/**
 * Supports routes, authorization
 *
 *  <MenuWithConfig
 *    items: [
 *      { name, icon, path, items }
 *    ]
 *    ...rest
 *  />
 */

interface Props extends MenuProps {
  items: any[]
}

class MenuWithConfig extends React.PureComponent<Props> {
  render() {
    const { items, ...rest } = this.props
    const rootDrawerItems = items.find(v => v.rootDrawer).routes
    return <Menu {...rest}>{this.renderItems(rootDrawerItems)}</Menu>
  }

  // I'm recursive
  renderItems(items) {
    return items.map(item => {
      if (item.items) {
        return (
          <Menu.SubMenu key={item.name} title={this.renderText(item)}>
            {this.renderItems(item.items)}
          </Menu.SubMenu>
        )
      } else {
        return <Menu.Item key={item.name}>{this.renderText(item)}</Menu.Item>
      }
    })
  }

  renderText(item) {
    const text = (
      <>
        {item.icon}
        {item.name}
      </>
    )
    if (item.path) {
      return <Link to={item.path}>{text}</Link>
    } else {
      return text
    }
  }
}

export default MenuWithConfig
