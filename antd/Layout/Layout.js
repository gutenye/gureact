import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import s from '../../theme'
import { merge } from 'lodash'
import Header from './Header'
import Drawer from './Drawer'
import { Content, Left, Right } from './Content'

// <Layout
//   STYLE: inner
//   header = {
//     actions: [{title, to, primary}]
//   drawer = {
//     appName,
//     menu: [{title, icon, children: [{title, to}]}]
//
// body { background-color: rgb(235, 238, 240); }
//

class Layout extends React.Component {
  state = {
    drawerIsOpen: false,
  }

  render() {
    const { drawer, header, inner } = this.props
    const { drawerIsOpen } = this.state
    return (
      <ThemeProvider theme={v => merge(DEFAULT_THEME, v)}>
        <Root>
          <Drawer
            isOpen={drawerIsOpen}
            closeDrawer={this.closeDrawer}
            {...drawer}
          />
          <DrawerRight>
            <Header openDrawer={this.openDrawer} header={header} />
            <HeaderDown>
              <HeaderDownInner inner={inner}>
                {this.props.children}
              </HeaderDownInner>
            </HeaderDown>
          </DrawerRight>
        </Root>
      </ThemeProvider>
    )
  }

  openDrawer = () => {
    this.setState({ drawerIsOpen: true })
  }

  closeDrawer = () => {
    this.setState({ drawerIsOpen: false })
  }
}

const Root = styled.div``

const DrawerRight = styled.div`
  ${s.tabletMin} {
    margin-left: ${p => p.theme.drawer.tabletWidth};
  }

  ${s.desktopMin} {
    margin-left: ${p => p.theme.drawer.desktopWidth};
  }
`

// use padding-top, for margin can be collapsed.
const HeaderDown = styled.div`
  padding-top: ${p => p.theme.header.height};
`

const HeaderDownInner = styled.div`
  ${p =>
    p.inner &&
    `
    background-color: white;
    margin-top: 24px;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    ${s.desktopMin} {
      margin-left: 24px;
      margin-right: 24px;
    }
  `};
`

const DEFAULT_THEME = {
  drawer: {
    desktopWidth: '230px',
    tabletWidth: '80px',
  },

  header: {
    height: '50px',
  },
}

Layout.Header = Header
Layout.Content = Content
Layout.Left = Left
Layout.Right = Right

export default Layout
