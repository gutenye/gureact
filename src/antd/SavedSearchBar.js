import React, { styled, NavLink } from './vendor'
import { isEmpty } from 'lodash'
import { MdDelete } from './icons'
import { Input, Button } from 'antd'
import SelectWithOptions from './SelectWithOptions'
const a = {
  Input,
  SelectWithOptions
}

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
  input: stringQuerier(a.Input),
  tags: arrayQuerier(a.SelectWithOptions),
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

  render() {
    const {locale, match, savedSearchs, items, location} = this.props
    const activeKey = this.activeKey()
    const isCustom = activeKey === 'custom'
    const isSaved = activeKey !== 'root' && activeKey !== 'custom'
    const name = NAME[locale]
    const query = isSaved ? savedSearchs[activeKey].query : location.query
    return (
      <Root>
        <div className='tabbar'>
          <NavLink to={match.url} exact isActive={() => activeKey === 'root'}>{name.all}</NavLink>
          {savedSearchs.map((v,index) =>
          <NavLink to={`${match.url}?saved=${index}`} isActive={() => activeKey === index} key={index}>{v.name}</NavLink>
          )}
          {isCustom && <a className='active'>{name.customSearch}</a>}
        </div>
        <div className='searcharea'>
          {items.map(({type, field, ...rest}) => {
            const Item = ITEMS[type]
            return <Item defaultValue={query[field] ? Item.parseQuery(query[field]) : null} key={field} {...rest} />
          })}
          {isCustom &&
            <Button onClick={this.saveSearch}>{name.saveSearch}</Button>
          }
          {isSaved &&
            <MdDelete onClick={this.deleteSearch} />
          }
        </div>
      </Root>
    )
  }

  // -> 'root' 'custom' <index>
  activeKey = () => {
    const {location} = this.props
    if (isEmpty(location.query))
      return 'root'
    else if ('saved' in location.query)
      return parseInt(location.query.saved, 10)
    else
      return 'custom'
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
