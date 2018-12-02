import React from 'react'
import { Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { Link } from 'react-router-dom'

/**
 *  <MenuWithItems
 *    items: [
 *      { text, [icon, to] },
 *      { text, [icon, to], items }
 *    ]
 *    linkRender
 *    iconRender
 *    ...rest
 *  />
 */

interface Props extends MenuProps {
  items: any[]
}

class MenuWithItems extends React.PureComponent<Props> {
  render() {
    const { items, ...rest } = this.props
    return <Menu {...rest}>{this.renderItems(items)}</Menu>
  }

  // I'm recursive
  renderItems(items) {
    return items.map(item => {
      if (item.items) {
        return (
          <Menu.SubMenu key={item.text} title={this.renderText(item)}>
            {this.renderItems(item.items)}
          </Menu.SubMenu>
        )
      } else {
        return <Menu.Item key={item.text}>{this.renderText(item)}</Menu.Item>
      }
    })
  }

  renderText(item) {
    const text = (
      <>
        {item.icon}
        {item.text}
      </>
    )
    if (item.to) {
      return <Link to={item.to}>{text}</Link>
    } else {
      return text
    }
  }
}

export default MenuWithItems
