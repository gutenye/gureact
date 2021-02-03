import React from 'react'
import styled from 'styled-components'
import { sample, random } from 'lodash'

// from https://material.io/color/#!/?view.left=0&view.right=0&primary.color=4A148C
const COLORS = [
  '#b71c1c',
  '#880e4f',
  '#4a148c',
  '#311b92',
  '#1a237e',
  '#0d47a1',
  '#01579b',
  '#006064',
  '#004d40',
  '#1b5e20',
  '#33691e',
  '#827717',
  '#f57f17',
  '#ff6f00',
  '#e65100',
  '#bf360c',
  '#3e2723',
  '#212121',
  '#263238',
]

class Placeholder extends React.Component {
  props: {
    /** 'random' */
    width?: string,
    /** default to height */
    height?: string,
  }

  static defaultProps = {
    width: '100px',
  }

  render() {
    let { width, height } = this.props
    if (width === 'random') width = `${random(50, 200)}px`
    if (height === 'random') height = `${random(50, 200)}px`
    height = height || width

    return <Root {...this.props} width={width} height={height} />
  }
}

const Root = styled.div`
  background-color: ${(p) => sample(COLORS)};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`

export default Placeholder
