import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Layout } from '../../src/antd'
import MdHome from 'react-icons/lib/md/home'

injectGlobal`
  a {
    text-decoration: none;
  }
`

class MyLayout extends React.Component {
  render() {
    const header = {
      title: 'Sharon',
      actions: [
        {title: 'Create Post', to: '/posts/new', primary: true},
      ]
    }

    const drawer = {
      appName: 'Sharon',
      menu: [{
        title: 'Products Manager', icon: <MdHome />, children: [
          {title: 'Stock', to: '/product'}
        ]
      }]
    }

    return (
      <Layout drawer={drawer} header={header}>
        <Content>
        content sharon, and guten tag, ich bin sharon, where have you been, from yiwu to china.
        </Content>
      </Layout>
    )
  }
}

const Content = styled.div`
  min-height: 150vh;
`

export default MyLayout

