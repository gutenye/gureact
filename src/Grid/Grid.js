import React from 'react'
import styled from 'styled-components'

// <Col w={1} md={1/2} lg={1/3}>
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

// 1/3 -> 33.3333
function toPrecent(value) {
  return (value * 100).toPrecision(4)
}

const _Col = styled.div`
  display: inline-block;
  width: ${p => toPrecent(p.w || 1)}%;
  box-sizing: border-box;
  padding: 0 12px;
  @media (min-width: 426px) {
    ${p => p.sm ? `width: ${p.sm}%;` : ''}
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
