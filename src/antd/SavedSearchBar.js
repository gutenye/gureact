import React, { styled, NavLink } from './vendor'
import { isEmpty } from 'lodash'
import { Button } from 'antd'
import Input from './Input'
import SelectWithOptions from './SelectWithOptions'
import MdDelete from 'react-icons/md/delete'

function stringQuerier(obj) {
  obj.parseQuery = (a) => a
  obj.toQuery = (a) => a
  return obj
}

function arrayQuerier(obj) {
  obj.parseQuery = (str) => str.split(',')
  obj.toQuery = (ary) => ary.join(',')
  return obj
}

const ITEMS = {
  input: stringQuerier(Input),
  tags: arrayQuerier(SelectWithOptions),
}
const NAME = {
  zh: {
    all: '所有',
    customSearch: '自定义',
    saveSearch: '保存这个搜索',
  },
  en: {
    all: 'All',
    customSearch: 'Custom Search',
    saveSearch: 'Save this search',
  }
}

//
// /posts?saved=:index
// /posts?q=x&tags=x
//
// <SavedSearchBar
//   <router-props>
//   locale = 'zh' {all, customSearch}
//   savedSearches = [{name, query}]
//   updateSavedSearchs
//   items=[
//     { type: 'input', placeholder: 'Search', field: 'q' },
//     { type: 'tags', placeholder: 'Tags', field: 'tags' },
class SavedSearchBar extends React.Component {
  static defaultProps = {
    locale: 'en'
  }

  // state: {
  //   activeKey: root custom <index>
  //   isRoot, isCustom, isSaved,
  //   query: fork props.savedSearchs[index].query
  // }
  state = {
    ...this.getState(),
  }

  render() {
    const {locale, match, savedSearchs, items} = this.props
    const {query, isCustom, isSaved} = this.state
    const name = NAME[locale]
    return (
      <Root>
        <div className='tabbar'>
          <NavLink to={match.url} exact isActive={this.isActive('root')}>{name.all}</NavLink>
          {savedSearchs.map((v,index) =>
          <NavLink to={`${match.url}?saved=${index}`} isActive={this.isActive(index)} key={index}>{v.name}</NavLink>
          )}
          {isCustom && <a className='active'>{name.customSearch}</a>}
        </div>
        <div className='searcharea'>
          {items.map(({type, field, ...rest}) => {
            const Item = ITEMS[type]
            return <Item value={query[field]} onChange={this.onChange(field)} key={field} {...rest} />
          })}
          {isCustom &&
            <Button onClick={this.saveSearch}>{name.saveSearch}</Button>
          }
          {isSaved &&
            <MdDelete button small gray onClick={this.deleteSearch} />
          }
        </div>
      </Root>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps))
  }

  getState(props) {
    const {location, savedSearchs, items} = props || this.props
    var activeKey, isRoot = false, isCustom = false, isSaved = false
    if (isEmpty(location.query)) {
      activeKey = 'root'
      isRoot = true
    } else if ('saved' in location.query) {
      activeKey = parseInt(location.query.saved, 10)
      isSaved = true
    } else {
      activeKey = 'custom'
      isCustom = true
    }

    var query = isSaved ? savedSearchs[activeKey].query : location.query
    items.forEach(item => {
      query[item.field] = ITEMS[item.type].parseQuery(query[item.field] || '')
    })

    return {query, activeKey, isRoot, isCustom, isSaved}
  }

  isActive = (key) => () => {
    return this.state.activeKey === key
  }

  onChange = (field) => (value) => {
    const {query} = this.state
    query[field] = value
    this.setState({query})
  }

  saveSearch = () => {
  }

  deleteSearch = () => {

  }
}

const Root = styled.div`
  .tabbar {
    background: #f5f6f7;
    border-radius: 3px 3px 0 0;
    display: flex;

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

  .searcharea {
    padding: 1rem;
  }
`

export default SavedSearchBar
