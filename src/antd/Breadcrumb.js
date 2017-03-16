import React, { Link } from './vendor'
import { Breadcrumb as Breadcrumb_ } from 'antd'
import { isString } from 'lodash'

//
// <Breadcrumb items='Title' />
// <Breadcrumb items=[['Posts', '/posts'], 'New Post'] />
//
class Breadcrumb extends React.Component {
  render() {
    // mobx returns ObservaleArray, not Array type
    var {items} = this.props
    items = isString(items) ? [items] : items
    return (
      <Breadcrumb_>
        {items.map((v,i) =>
          <Breadcrumb_.Item key={i}>
            {isString(v) ? <span>{v}</span> : <Link to={v[1]}>{v[0]}</Link>}
          </Breadcrumb_.Item>
        )}
      </Breadcrumb_>
    )
  }
}

export default Breadcrumb
