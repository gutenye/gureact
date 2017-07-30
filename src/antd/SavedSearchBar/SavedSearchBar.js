import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { difference, isEmpty, isEqual, remove, maxBy, omit } from 'lodash'
import { Dropdown, Menu, Modal } from 'antd'
import { MdMoreVert } from 'react-icons'
import INPUTS from '../Inputs/Inputs'
import FormModal from '../FormModal/FormModal'
import NavLink from '../../core/NavLink/NavLink'

const OMIT_FIELDS = ['page', 'limit']

//
// /posts?q=x&tags=x
//
// <SavedSearchBar
//   items = [
//     { name: 'q', type: 'input', placeholder }
//     { name: 'tags', type: 'tags', options }
//   savedSearchs = [{id, name, query: { tags: 'a,b' }}]
//   onUpdate(savedSearchs)       // save data to db
//
///// Development
// query: { tags: 'a,b' }              // used in url and savedSearchs
// inputValues: { tags: ['a', 'b'] }   // default value for input
@withRouter
class SavedSearchBar extends React.Component {
  // state: {
  //   status: 'root', saved', 'custom'    // show differnt menu based on it
  //   currentSavedSearch                  // for delete
  //   inputValues: { [name]: value },     // for value/onChange
  // }
  state = this.getState(this.props)

  render() {
    const { match, location, savedSearchs, items } = this.props
    const { inputValues, status } = this.state
    const dropdownMenu = (
      <Menu onClick={this.onMenuClick}>
        {status === 'custom' &&
          <Menu.Item key="saveSearch">
            {t.saveSearch}
          </Menu.Item>}
        {status === 'saved' &&
          <Menu.Item key="deleteSearch">
            {t.deleteSearch}
          </Menu.Item>}
      </Menu>
    )

    return (
      <Root>
        <div className="tabbar">
          <div className="tabs">
            <NavLink to={match.url} exact omit={OMIT_FIELDS}>
              {t.all}
            </NavLink>
            {savedSearchs.map(v =>
              <NavLink
                key={v.name}
                to={{ pathname: match.url, query: v.query }}
                omit={OMIT_FIELDS}
              >
                {v.name}
              </NavLink>
            )}
            {status === 'custom' &&
              <NavLink
                to={{ pathname: match.url, query: location.query }}
                omit={OMIT_FIELDS}
              >
                {t.customSearch}
              </NavLink>}
          </div>
          {status !== 'root' &&
            <Dropdown
              overlay={dropdownMenu}
              trigger={['click']}
              placement="bottomRight"
            >
              <MdMoreVert className="dropdown" button />
            </Dropdown>}
        </div>
        <div className="searchItems">
          {items.map(({ type, name, ...rest }) => {
            const INPUT = INPUTS[type]
            return (
              <INPUT
                key={name}
                className="item"
                value={inputValues[name]}
                onChange={this.onChange(name)}
                onSearch={this.onSearch}
                {...rest}
              />
            )
          })}
        </div>
      </Root>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps))
  }

  // return { inputValues, status, currentSavedSearch }
  getState(props) {
    const { savedSearchs, location, items } = props
    const locationQuery = omit(location.query, ...OMIT_FIELDS)

    // if loading, savedSearchs is [].
    // if deleted, savedSearch is null
    const found = savedSearchs.find(v => isEqual(v.query, locationQuery))
    const query = found ? found.query : location.query
    const inputValues = this.parseQueries(query, items)

    const status = isEmpty(locationQuery) ? 'root' : found ? 'saved' : 'custom'

    return { inputValues, status, currentSavedSearch: found }
  }

  onChange = name => value => {
    const { inputValues } = this.state
    inputValues[name] = value
    this.setState({ inputValues })
  }

  onSearch = () => {
    this.props.history.push({ query: this.toQueries() })
  }

  // {tags: 'a,b'} -> {tags: ['a', 'b']}
  parseQueries(query, items) {
    var inputValues = {}
    items.forEach(item => {
      inputValues[item.name] = INPUTS[item.type].parseQuery(
        query[item.name] || ''
      )
    })
    return inputValues
  }

  // {tags: ['a', 'b']} -> {tags: 'a,b'}
  toQueries() {
    var query = {}
    this.props.items.forEach(item => {
      const value = this.state.inputValues[item.name]
      if (!isEmpty(value)) query[item.name] = INPUTS[item.type].toQuery(value)
    })
    return query
  }

  onMenuClick = e => {
    this[e.key]()
  }

  saveSearch = () => {
    const { savedSearchs } = this.props
    FormModal.open({
      items: [
        {
          type: 'AutoComplete',
          name: 'name',
          placeholder: t.name,
          rules: [{ required: true }],
          dataSource: savedSearchs.map(v => v.name),
        },
      ],
      onSave: inputValues => {
        const { savedSearchs } = this.props
        const found = savedSearchs.find(v => v.name === inputValues.name)
        const query = this.toQueries(this.state.inputValues)
        if (found) found.query = query
        else savedSearchs.push({ name: inputValues.name, query })
        this.props.onUpdate(savedSearchs)
      },
    })
  }

  deleteSearch = () => {
    Modal.confirm({
      title: t.confirmDelete,
      onOk: () => {
        const { savedSearchs } = this.props
        const { currentSavedSearch } = this.state
        remove(savedSearchs, { name: currentSavedSearch.name })
        this.props.onUpdate(this.props.savedSearchs)
      },
    })
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
