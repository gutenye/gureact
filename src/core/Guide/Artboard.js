import React from 'react'
import ArtboardMobile from './ArtboardMobile'
import ArtboardDefault from './ArtboardDefault'

const Artboard = props => {
  if (props.type === 'mobile') return <ArtboardMobile {...props} />
  else return <ArtboardDefault {...props} />
}

export default Artboard
