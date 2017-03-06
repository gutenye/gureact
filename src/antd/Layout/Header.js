import React, { styled, tablet, desktop } from '../vendor'
import { MdMenu } from '../icons'
import ButtonLink from '../../ButtonLink'

class Header extends React.Component {
  static defaultProps = {
    actions: [],
  }

  render() {
    const {title, actions, openDrawer} = this.props
    return (
      <Root>
        <MdMenu className='icon-menu' onClick={openDrawer} />
        <div className='title'>{title}</div>
        <div className='actions'>
          {actions.map(v =>
          <ButtonLink key={v.title} primary={v.primary} to={v.to}>{v.title}</ButtonLink>
          )}
        </div>
      </Root>
    )
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

  ${tablet} {
    left: ${p => p.theme.drawer.tabletWidth};
  }

  ${desktop} {
    left: ${p => p.theme.drawer.desktopWidth};
  }

  > .icon-menu {
    ${tablet} {
      display: none;
    }
  }

  > .title {
    flex: 1;
  }

  > .actions {
    height: 100%;
  }
`

export default Header
