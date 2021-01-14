import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Layout } from '../../src/antd'
import MdHome from 'react-icons/lib/md/home'

injectGlobal`
  body {
    background-color: rgb(235, 238, 240) !important;
  }
  a {
    text-decoration: none;
  }

`

class MyLayout extends React.Component {
  render() {
    const header = {
      title: 'Sharon',
      actions: [{ title: 'Create Post', to: '/posts/new', primary: true }],
    }

    const drawer = {
      appName: 'Sharon',
      menu: [
        {
          title: 'Products Manager',
          icon: <MdHome />,
          children: [{ title: 'Stock', to: '/product' }],
        },
      ],
    }

    return (
      <Layout drawer={drawer} header={header}>
        <Layout.Content>
          <Layout.Left>
            content sharon, and guten tag, ich bin sharon, where have you been,
            from yiwu to china.
          </Layout.Left>
          <Layout.Right>my pictures</Layout.Right>
        </Layout.Content>
      </Layout>
    )
  }
}

export default MyLayout
