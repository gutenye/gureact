import * as React from 'react'
import styled from 'styled-components'
import { Button, List } from 'antd-mobile'
import { ButtonProps } from 'antd-mobile/lib/button'

/*
 * <ActionsBar
 *   items: [
 *     { label: 'Save', primary: true }  onClick, disabled, loading
 *     { label: 'Edit' },
 *     { label: 'Delete', left: true }
 *   ]
 *
 * In AppNewComponent: actionBars: {items: [{label: 'Save', special: 'submit'}]}
 */

export interface Props {
  // FIXME: should remove `special`. needed for AppNewComponent
  items: Array<{
    label: string
    special?: string
    primary?: boolean
    left?: boolean
    onClick?: any
    disabled?: boolean
    loading?: boolean
  }>
  style?: Obj
  className?: string
}

class ActionsBar extends React.Component<Props> {
  render() {
    const { items, ...rest } = this.props
    return (
      <Root {...rest}>
        {items.map(({ label, primary, left, ...rest }) => {
          const type = primary ? 'ghost' : undefined
          if (left) {
            return (
              <div
                className="ActionsBar-item"
                style={{ marginRight: 'auto' }}
                {...rest}
              >
                {label}
              </div>
            )
          } else {
            return (
              <Button
                className="ActionsBar-item"
                key={label}
                type={type}
                inline
                size="small"
                {...rest}
              >
                {label}
              </Button>
            )
          }
        })}
      </Root>
    )
  }
}

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: ${(p) => p.theme.actionsBarBackground};
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 5px;

  .ActionsBar-item {
    cursor: pointer;
    margin-right: 5px;
  }
`

export default ActionsBar
