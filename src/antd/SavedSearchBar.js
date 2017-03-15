import React, { styled, NavLink, withRouter } from './vendor'
import { isEmpty, remove, maxBy } from 'lodash'
import { Dropdown, Menu, Modal } from 'antd'
import { FormModal } from 'gureact/antd'
import { MdMoreVert } from 'react-icons'
import INPUTS from './inputs'

//
// /posts?saved=:index
// /posts?q=x&tags=x
//
// <SavedSearchBar
//   items=[{type: 'input', field: 'q', placeholder}]  tags:{options}
//   savedSearchs = [{id, name, query}]
//   onUpdate(savedSearchs)   // update, remove query
@withRouter
class SavedSearchBar extends React.Component {
  // state: {
  //   id: ID 'root' 'custom'
  //   isRoot, isCustom, isSaved,
  //   values: {}, for input onChange, {tags: ['a', 'b']}
  // }
  state = {
    ...this.getState()
  }

  render() {
    const {match, savedSearchs, items} = this.props
    const {values, isCustom, isSaved} = this.state
    const dropdownMenu = (
      <Menu onClick={this.onMenuClick}>
        {isCustom && <Menu.Item key='saveSearch'>{t.saveSearch}</Menu.Item>}
        {isSaved && <Menu.Item key='deleteSearch'>{t.deleteSearch}</Menu.Item>}
      </Menu>
    )

    return (
      <Root>
        <div className='tabbar'>
          <div className='tabs'>
            <NavLink to={match.url} exact isActive={this.isActive('root')}>{t.all}</NavLink>
            {savedSearchs.map((v) =>
              <NavLink key={v.id} to={`${match.url}?saved=${v.id}`} isActive={this.isActive(v.id)}>{v.name}</NavLink>
            )}
            {isCustom && <a className='active'>{t.customSearch}</a>}
          </div>
          <Dropdown overlay={dropdownMenu} trigger={['click']} placement='bottomRight'>
            <MdMoreVert className='dropdown' button />
          </Dropdown>
        </div>
        <div className='searchItems'>
          {items.map(({type, field, ...rest}) => {
            const INPUT = INPUTS[type]
            return <INPUT key={field} className='item' value={values[field]} onChange={this.onChange(field)} onSearch={this.onSearch} {...rest} />
          })}
        </div>
      </Root>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps))
  }

  getState(props) {
    const {location, savedSearchs, items} = props || this.props
    var id, isRoot = false, isCustom = false, isSaved = false
    if (isEmpty(location.query)) {
      id = 'root'
      isRoot = true
    } else if ('saved' in location.query) {
      id = parseInt(location.query.saved, 10)
      isSaved = true
    } else {
      id = 'custom'
      isCustom = true
    }

    var values
    // if loading, savedSearchs is [].
    // if deleted, savedSearchs is not found.
    const found = savedSearchs.find(v => v.id === id)
    const query = found ? found.query : location.query
    values = this.parseQueries(query, items)
    return {values, id, isRoot, isCustom, isSaved}
  }

  // {tags: 'a,b'} -> {tags: ['a', 'b']}
  parseQueries(query, items) {
    var values = {}
    items.forEach(item => {
      values[item.field] = INPUTS[item.type].parseQuery(query[item.field] || '')
    })
    return values
  }

  // {tags: ['a', 'b']} -> {tags: 'a,b'}
  toQueries() {
    var query = {}
    this.props.items.forEach(item => {
      const value = this.state.values[item.field]
      if (!isEmpty(value))
        query[item.field] = INPUTS[item.type].toQuery(value)
    })
    return query
  }

  isActive = (id) => () => {
    return this.state.id === id
  }

  onChange = (field) => (value) => {
    const {values} = this.state
    values[field] = value
    this.setState({values})
  }

  onMenuClick = (e) => {
    this[e.key]()
  }

  saveSearch = () => {
    const {savedSearchs} = this.props
    FormModal.open({
      items: [
        {type: 'AutoComplete', field: 'name', placeholder: t.name, rules: [{required: true}], dataSource: savedSearchs.map(v => v.name) }
      ],
      onSave: (values) => {
        const found = savedSearchs.find(v => v.name === values.name)
        const query = this.toQueries(this.state.values)
        if (found)
          found.query = query
        else
          savedSearchs.push({id: this.genId(), name: values.name, query})
        this.props.onUpdate(savedSearchs)
      }
    })
  }

  deleteSearch = () => {
    Modal.confirm({
      title: t.confirmDelete,
      onOk: () => {
        remove(this.props.savedSearchs, {id: this.state.id})
        this.props.onUpdate(this.props.savedSearchs)
      }
    })
  }

  genId = () => {
    const {savedSearchs} = this.props
    return maxBy([{id: 0}, ...savedSearchs], 'id').id + 1
  }

  onSearch = () => {
    this.props.history.push({query: this.toQueries()})
  }
}

const Root = styled.div`
  .tabbar {
    background: #f5f6f7;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;

    > .tabs {
      flex: 1;
      display: flex;
    }

    a {
      color: #707070;
      padding: 15px 20px;
      border-right: 1px solid #ebeef0;
      border-bottom: 1px solid #ebeef0;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-decoration: none;

      &.active {
        color: #1a1a1a;
        background-color: #ffffff;
        border-bottom-color: #ffffff;
        cursor: default;
      }
    }
  }

  .searchItems {
    padding: 24px;
    display: flex;

    > .item {
      width: 30%;
    }
  }
`

const TRANSLATIONS = {
  en: {
    name: 'Name',
    all: 'All',
    customSearch: 'Custom Search',
    saveSearch: 'Save this search',
    deleteSearch: 'Remove this search',
    confirmDelete: 'Delete this Search?',
  },
  zh: {
    name: '名称',
    all: '所有',
    customSearch: '自定义',
    saveSearch: '保存这个搜索',
    deleteSearch: '删除这个搜索',
    confirmDelete: '确定删除这个搜索?',
  },
}
const t = TRANSLATIONS[window.locale]


export default SavedSearchBar
