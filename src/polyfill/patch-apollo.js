// @flow
import React from 'react'
import styled from 'styled-components'
import { graphql as _graphql } from 'react-apollo'
import { get } from 'lodash'

// graphql wrapper
//
// - auto handle error
//
//   const App = graphql(gql`{
//     products {
//       id
//     }
//   }`, {
//    initVariables: {q: undefined},   // for apollo is merging variables with old one
//    initData: {products: []},        // default data when loading
//    // use params and location.query as variables
//    // props is data
//   })(App)

function graphqlPatch(query: any, opts: any) {
  opts = { initData: {}, initVairables: {}, ...opts }
  return _graphql(query, {
    options: props => {
      const params = get(props, 'match.params', {})
      const query = get(props, 'location.query', {})
      return { variables: { ...opts.initVariables, ...params, ...query } }
    },
    props: ({ data, ownProps }) => {
      return { ...opts.initData, ...data }
    },
    ...opts,
  })
}

export function graphql(query: any, opts: any) {
  return function(WrappedComponent: any) {
    const Cmp = class extends React.Component {
      render() {
        if (this.props.error)
          return (
            <ErrorPage>
              {this.props.error.toString()}
            </ErrorPage>
          )
        return <WrappedComponent {...this.props} />
      }
    }
    return graphqlPatch(query, opts)(Cmp)
  }
}

const ErrorPage = styled.div`
  color: red;
  width: 100%;
  height: 100%;
`
