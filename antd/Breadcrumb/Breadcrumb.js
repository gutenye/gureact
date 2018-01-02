import React from 'react'
import { Link } from 'react-router-dom'
import { isString } from 'lodash'
import { Breadcrumb } from 'antd'

//
// <Breadcrumb items='Title' />
// <Breadcrumb items=[['Posts', '/posts'], 'New Post'] />
//
class BreadcrumbComp extends React.Component {
  render() {
    // mobx returns ObservaleArray, not Array type
    var { items } = this.props
    items = isString(items) ? [items] : items
    return (
      <Breadcrumb>
        {items.map((v, i) =>
          <Breadcrumb.Item key={i}>
            {isString(v) ? <span>{v}</span> : <Link to={v[1]}>{v[0]}</Link>}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    )
  }
}

export default BreadcrumbComp
