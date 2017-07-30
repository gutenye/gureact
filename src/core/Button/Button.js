// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { isString, omit } from 'lodash'
import { Link } from 'react-router-dom'

class Button extends React.Component {
  props: {
    primary?: boolean,
    /** href or onClick function */
    action?: string | Function,
    children?: any,
  }

  render() {
    const { action, children, ...rest } = this.props
    if (isString(action)) {
      return (
        <LinkStyled to={action} {...rest}>
          {children}
        </LinkStyled>
      )
    } else {
      return (
        <Root onClick={action} {...rest}>
          {children}
        </Root>
      )
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
    color: ${p.theme.textPrimaryOnPrimary};
    background: ${p.theme.primary};
  `}
`

const LinkStyled = styled(p =>
  <Link {...omit(p, 'primary')}>
    {p.children}
  </Link>
)`
  ${shared}
`

const Root = styled.div`${shared};`

export default Button
