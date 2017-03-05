import React, { styled, tablet, desktop } from '../vendor'
import { ThemeProvider } from 'styled-components'
import { merge } from 'lodash'
import Header from './Header'
import Drawer from './Drawer'

// <Layout
//   header = {
//     actions: [{title, to, primary}]
//   drawer = {
//     appName,
//     menu: [{title, icon, children: [{title, to}]}]
const theme = {
  primary: {
    background: '#3B5999',
    backgroundDarken: '#344e87',
    color: 'white',
  },

  drawer: {
    desktopWidth: '230px',
    tabletWidth: '80px',
  },

  header: {
    height: '50px',
  },
}

class Layout extends React.Component {
  state = {
    drawerIsOpen: false,
  }

  render() {
    const { drawer, header } = this.props
    const { drawerIsOpen } = this.state
    return (
      <ThemeProvider theme={v => merge(theme, v)}>
        <Root>
          <Drawer isOpen={drawerIsOpen} closeDrawer={this.closeDrawer} {...drawer} />
          <Right>
            <Header openDrawer={this.openDrawer} {...header} />
            <Content>
              {this.props.children}
            </Content>
          </Right>
        </Root>
      </ThemeProvider>
    )
  }

  openDrawer = () => {
    this.setState({drawerIsOpen: true})
  }

  closeDrawer = () => {
    this.setState({drawerIsOpen: false})
  }
}

const Root = styled.div``

const Right = styled.div`
  ${tablet} {
    margin-left: ${p => p.theme.drawer.tabletWidth};
  }

  ${desktop} {
    margin-left: ${p => p.theme.drawer.desktopWidth};
  }
`

const Content = styled.div`
  margin-top: ${p => p.theme.header.height};
`

export default Layout
