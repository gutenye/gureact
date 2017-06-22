// @flow
import { graphql as _graphql } from 'react-apollo'
import { get } from 'lodash'

// graphql wrapper
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
export function graphql(query: any, opts: any) {
  opts = { initData: {}, initVairables: {}, ...opts }
  return _graphql(query, {
    options: props => {
      const params = get(props, 'match.params', {})
      const query = get(props, 'location.query', {})
      return { variables: { ...opts.initVariables, ...params, ...query } }
    },
    props: ({ data, ownProps }) => {
      return ({ ...opts.initData, ...data })},
    ...opts,
  })
}
