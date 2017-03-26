import React, { styled, css, _, Link as Link_ } from './vendor'

// <Button
//   action: link | fn
//   primary
class Button extends React.Component {
  render() {
    const {action, children, ...rest} = this.props
    if (_.isString(action)) {
      return <Link to={action} {...rest}>{children}</Link>
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

  ${p => p.primary && `
    color: ${p.theme.primary.color};
    background: ${p.theme.primary.background};
    &:hover {
      color: ${p.theme.primary.color};
      background: ${p.theme.primary.backgroundDarken};
    }
  `}
`

const Link = styled(p => <Link_ {..._.omit(p, 'primary')}>{p.children}</Link_>)`
  ${shared}
`

const Root = styled.div`
  ${shared}
`

export default Button
