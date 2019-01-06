import React from 'react'
import styled from 'styled-components'
import { isString } from 'lodash'
import { MdMenu } from 'react-icons'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Button from '../../core/Button/Button'
import s from '../../theme'

// import { app } from 'states'
// <Header header={app.header} openDrawer
//
// @setHeader({
//   title
//   actions: [
//     {title, action:link|fn|METHOD, primary}
// })
// class HomePage extends React.Component {
//   componentDidMount() {
//     app.header.methods = {         // for action METHOD
//       save: this.save
//     }
class Header extends React.Component {
  render() {
    const { header, openDrawer } = this.props
    const { title, actions } = { title: '', actions: [], ...header }
    return (
      <Root>
        <MdMenu className="icon-menu" onClick={openDrawer} />
        <div className="title">
          <Breadcrumb items={title} />
        </div>
        <div className="actions">
          {actions.map(({ title, action, ...rest }) => (
            <Button
              primary
              key={title}
              action={this.getAction(action)}
              {...rest}
            >
              {title}
            </Button>
          ))}
        </div>
      </Root>
    )
  }

  getAction = action => {
    // '/posts'
    if (isString(action) && action.startsWith('/')) {
      return action
      // 'save' | fn
    } else {
      return () => {
        const method = this.props.header.methods[action] || action // call it later so that you can change methods later
        method()
      }
    }
  }
}

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${p => p.theme.header.height};
  background: white;
  display: flex;
  align-items: center;
  z-index: 10;
  border-bottom: 1px solid #ebeef0;

  ${s.tabletMin} {
    left: ${p => p.theme.drawer.tabletWidth};
  }

  ${s.desktopMin} {
    left: ${p => p.theme.drawer.desktopWidth};
  }

  > .icon-menu {
    ${s.tabletMin} {
      display: none;
    }
  }

  > .title {
    flex: 1;
    margin-left: 24px;
  }

  > .actions {
    height: 100%;
  }
`

export default Header
