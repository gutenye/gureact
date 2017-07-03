import React from 'react'
import styled from 'styled-components'
import { castArray } from 'lodash'
import Artboard from './Artboard'
import ArtboardDefault from './ArtboardDefault'
import ArtboardMobile from './ArtboardMobile'

/**
 * <Guide>
 *   <Guide.Artboard
 *     title="Basic"
 *     type="mobile"   iphone iphonePlus
 */
const Guide = ({ children }) => {
  return (
    <Root>
      {castArray(children).map(item =>
        <div className="Guide-item">
          {item}
        </div>
      )}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;

  .Guide-item {
    margin: 16px;
  }
`

Guide.Artboard = Artboard
Guide.ArtboardMobile = ArtboardMobile
Guide.ArtboardDefault = ArtboardDefault

export default Guide
