import React from 'react'
import styled from 'styled-components'
import { castArray } from 'lodash'
import Artboard from './Artboard'
import ArtboardDefault from './ArtboardDefault'
import ArtboardMobile from './ArtboardMobile'
import Color from './Color'

/**
 * <Guide>
 *   <Guide.Artboard
 *     title="Basic"
 *     type="mobile"   iphone iphonePlus
 */
const Guide = ({ children }) => {
  return (
    <Root>
      {castArray(children).map((item, i) =>
        <div key={i} className="Guide-item">
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
Guide.Color = Color

export default Guide
