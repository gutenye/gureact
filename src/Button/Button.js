// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { isString, omit } from 'lodash'
import { Link } from 'react-router-dom'

class Button extends React.Component {
  props: {
    primary: boolean,
    /** link | fn */
    action: any,
    children: any,
  }

  render() {
    const { action, children, ...rest } = this.props
    if (isString(action)) {
      return <LinkStyled to={action} {...rest}>{children}</LinkStyled>
    } else {
      return <Root onClick={action} {...rest}>{children}</Root>
    }
  }
}

const shared = css`
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  ${p =>
    p.primary &&
    `
    color: ${p.theme.primary.color};
    background: ${p.theme.primary.background};
    &:hover {
      color: ${p.theme.primary.color};
      background: ${p.theme.primary.backgroundDarken};
    }
  `}
`

const LinkStyled = styled(p =>
  <Link {...omit(p, 'primary')}>{p.children}</Link>
)`
  ${shared}
`

const Root = styled.div`
  ${shared}
`

export default Button
