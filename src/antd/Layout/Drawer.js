import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import s from '../../theme'
import { Menu, Button } from 'antd'

const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
  .matches
const menuMode = isTablet ? 'vertical' : 'inline'

@withRouter
class Drawer extends React.Component {
  props: {
    isOpen: boolean,
    closeDrawer: Function,
    appName: string,
    /** [
     * { title, icon, children: [{ title, to }]}
     * { title, onClick }
     */
    menu: Array<*>,
    end: Array<*>,
  }

  render() {
    const { appName, menu, isOpen, closeDrawer, end } = this.props
    return (
      <Root {...this.props} onClick={this.onRootClick}>
        <div className="Drawer-drawer" onClick={this.onDrawerClick}>
          <Link className="Drawer-logo" to="/">
            {appName}
          </Link>
          <Menu mode={menuMode}>
            {menu.map(v =>
              <Menu.SubMenu
                key={v.title}
                title={
                  <span>
                    {v.icon}
                    <Title>
                      {v.title}
                    </Title>
                  </span>
                }
              >
                {v.children.map(c =>
                  <Menu.Item key={c.title}>
                    <Link to={c.to} onClick={closeDrawer}>
                      {c.title}
                    </Link>
                  </Menu.Item>
                )}
              </Menu.SubMenu>
            )}
          </Menu>
        </div>
      </Root>
    )
  }

  onRootClick = () => {
    this.props.closeDrawer()
  }

  onDrawerClick = e => {
    e.stopPropagation()
  }
}

const Root = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  height: 100%;

  .Drawer-drawer {
    height: 100%;
    background-color: white;
  }

  ${s.mobileOnly} {
    width: 100%;
    overflow: hidden;
    pointer-events: ${p => (p.isOpen ? 'auto' : 'none')};
    contain: strict;

    ::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      content: "";
      opacity: ${p => (p.isOpen ? 1 : 0)};
      will-change: opacity;
    }

    .Drawer-drawer {
      background: #fff;
      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
        0px 16px 24px 2px rgba(0, 0, 0, 0.14),
        0px 6px 30px 5px rgba(0, 0, 0, 0.12);
      left: 0;
      right: initial;
      display: flex;
      position: absolute;
      flex-direction: column;
      width: calc(100% - 56px);
      max-width: 280px;
      transform: ${p => (p.isOpen ? 'none' : 'translateX(calc(-100% - 20px))')};
      will-change: transform;
      box-sizing: border-box;
      overflow: hidden;
      touch-action: none;
    }
  }

  .Drawer-drawer {
    ${s.tabletMin} {
      width: ${p => p.theme.drawer.tabletWidth};
      border-right: 1px solid #e4e4e4;
    }

    ${s.desktopMin} {
      width: ${p => p.theme.drawer.desktopWidth};
    }

    .Drawer-logo {
      display: inline-flex;
      height: 64px;
      width: 100%;
      align-items: center;
      justify-content: center;
      background-color: ${p => p.theme.primary};
      color: ${p => p.theme.textPrimaryOnPrimary};
    }
  }

  .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
    display: none;
  }
`

const Title = styled.span`${s.tabletOnly} {display: none;}`
export default Drawer
