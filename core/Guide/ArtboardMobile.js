import React from 'react'
import styled from 'styled-components'
import Statusbar from './Statusbar/Statusbar'

const ArtboardMobile = ({ children }) => {
  return (
    <Root>
      <Statusbar />
      <div className="ArtboardMobile-children">{children}</div>
    </Root>
  )
}

const Root = styled.div`
  width: 375px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

  .ArtboardMobile-children {
    flex: 1;
    height: 647px;
    position: relative;
  }
`

ArtboardMobile.Root = Root

export default ArtboardMobile
