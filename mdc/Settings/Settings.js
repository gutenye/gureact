// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { List } from 'react-mc'
import type { PropsC } from '../../types'

class Settings extends React.Component {
  props: {
    /**
     * items={[
     *  { title?, items: [ { icon, text, secondaryText, to?, ...rest } ]},
     *  { avatar: true, title?, items: [ { avatar, ...  } ]},
     * ]}
     */
    items: Array,
  } & PropsC

  render() {
    const { items, className } = this.props
    return (
      <Root className={className}>
        {items.map((group) => [
          group.title && (
            <List.Group.Subheader>{group.title}</List.Group.Subheader>
          ),
          <List avatarList={group.avatar}>
            {group.items.map((subitem, i) => {
              const { icon, avatar, text, secondaryText, to, ...rest } = subitem
              const linkProps = to ? { component: Link, to } : {}
              return [
                <List.Item key={i} {...linkProps} {...rest}>
                  {group.avatar ? (
                    <List.Item.StartDetail component="img" src={avatar} />
                  ) : (
                    <List.Item.StartDetail className="material-icons">
                      {icon}
                    </List.Item.StartDetail>
                  )}

                  <List.Item.Text>
                    {text}
                    {secondaryText && (
                      <List.Item.Text.Secondary>
                        {secondaryText}
                      </List.Item.Text.Secondary>
                    )}
                  </List.Item.Text>
                  <List.Item.EndDetail className="material-icons">
                    keyboard_arrow_right
                  </List.Item.EndDetail>
                </List.Item>,
                <List.Divider inset />,
              ]
            })}
          </List>,
        ])}
      </Root>
    )
  }
}

const Root = styled(List.Group)`
  padding: 0;

  .mdc-list {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    background-color: white;
    padding: 0 0 0 16px;
  }

  .mdc-list:not(:last-child) {
    margin-bottom: 32px;
  }

  .mdc-list-divider:last-child {
    display: none;
  }

  .mdc-list-item__end-detail {
    color: #c7c7cc;
  }

  .mdc-list-group__subheader {
    color: #8f8f8f;
    margin: 0;
    padding-left: 16px;
    font-weight: normal;
    text-transform: uppercase;
  }
`

export default Settings
