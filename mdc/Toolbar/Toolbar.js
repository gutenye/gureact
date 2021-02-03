import React from 'react'
import styled from 'styled-components'
import { Toolbar } from 'react-mc'
import { withRouter } from 'react-router-dom'
import { MdArrowBack } from 'react-icons'
import s from '../../theme'

@withRouter
class MDCToolbar extends React.Component {
  static displayName = 'Toolbar'
  props: {
    title?: string,
    back?: boolean,
    children: any,
  }

  render() {
    const { title, back, children } = this.props
    const backEl = back && (
      <Toolbar.Icon
        menu
        className="Toolbar-back-icon"
        onClick={this.onBackClick}
      >
        <MdArrowBack />
      </Toolbar.Icon>
    )
    return (
      <Root>
        <Toolbar fixed waterfall>
          <Toolbar.Row>
            <Toolbar.Section align="start">
              {backEl}
              <Toolbar.Title>{title}</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Toolbar.FixedAdjust>{children}</Toolbar.FixedAdjust>
      </Root>
    )
  }

  onBackClick = () => {
    const { history } = this.props
    history.goBack()
  }
}

const Root = styled.div`
  .Toolbar-back-icon {
    ${s.desktopMin} {
      display: none;
    }
  }
`

MDCToolbar.FixedAdjust = Toolbar.FixedAdjust

export default MDCToolbar
