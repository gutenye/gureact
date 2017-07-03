import React from 'react'
import styled from 'styled-components'
import MDCToolbar from '@react-mdc/toolbar'
import { withRouter } from 'react-router-dom'
import { MdArrowBack } from 'react-icons'
import './Toolbar.scss'

/**
 * import { Toolbar } from 'gureact/mdc'
 * import { MdMenu, MdArrowBack } from 'react-icons'
 * 
 * <Toolbar
 *   menu onMenuClick
 *   back
 *   title, search
 */

@withRouter
class Toolbar extends React.Component {
  props: {
    title?: string,
    back?: boolean,
  }

  render() {
    const { title, back } = this.props
    const backEl =
      back &&
      <div className="mdc-toolbar__icon--menu" onClick={this.onBackClick}>
        <MdArrowBack className="Toolbar-icon" />
      </div>
    return (
      <Root>
        <MDCToolbar.Container>
          <MDCToolbar.Row>
            <MDCToolbar.Section align="start">
              {backEl}
              <MDCToolbar.Title>
                {title}
              </MDCToolbar.Title>
            </MDCToolbar.Section>
          </MDCToolbar.Row>
        </MDCToolbar.Container>
      </Root>
    )
  }

  onBackClick = () => {
    this.props.history.goBack()
  }
}

const Root = styled.div`
  .Toolbar-icon {
    width: 24px;
    height: 24px;
  }
`

export default Toolbar
