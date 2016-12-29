import React from 'react'
import styled from 'styled-components'

export class Col extends React.Component {
  render() {
    const {props: {children}, props} = this
    return (
      <_Col {...props}>
        {children}
      </_Col>
    )
  }
}

const _Col = styled.div`
  display: inline-block;
  width: ${({w}) => w}%;
  box-sizing: border-box;
  padding: 0 12px;
  @media (min-width: 426px) {
    width: ${({sm}) => sm}%;
  }
`

export class Container extends React.Component {
  render() {
    const {props: {children}} = this
    return (
      <_Container>
        {children}
      </_Container>
    )
  }
}

const _Container = styled.div`
  @media (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`
