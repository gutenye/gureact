import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { omit } from 'lodash'

// <ButtonLink primary>
class ButtonLink extends React.Component {
  render() {
    return (
      <Root {...this.props}>{this.props.children}</Root>
    )
  }
}

const Root = styled(p => <Link {...omit(p, 'primary')}>{p.children}</Link>)`
  ${p => p.primary && `
    color: ${p.theme.primary.color};
    background: ${p.theme.primary.background};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;

    &:hover {
      color: ${p.theme.primary.color};
      background: ${p.theme.primary.backgroundDarken};
    }
  `}
`

export default ButtonLink
