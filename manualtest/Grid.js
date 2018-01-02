import React from 'react'
import { Col, Container } from '../src'

export default class MyGrid extends React.Component {
  render() {
    return (
      <Container>
        <Col w={100} sm={50}>a</Col>
        <Col w={100} sm={50}>b</Col>
      </Container>
    )
  }
}
