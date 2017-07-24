import React from 'react'
import styled from 'styled-components'
import { Toolbar } from 'react-mc'
import { withRouter } from 'react-router-dom'
import { MdArrowBack } from 'react-icons'

@withRouter
class MDCToolbar extends React.Component {
  static displayName = 'Toolbar'
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
        <Toolbar>
          <Toolbar.Row>
            <Toolbar.Section align="start">
              {backEl}
              <Toolbar.Title>
                {title}
              </Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
      </Root>
    )
  }

  onBackClick = () => {
    const { history } = this.props
    history.goBack()
  }
}

const Root = styled.div`
  .Toolbar-icon {
    width: 24px;
    height: 24px;
  }
`

export default MDCToolbar
