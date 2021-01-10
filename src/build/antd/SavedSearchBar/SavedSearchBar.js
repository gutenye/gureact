'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/dropdown/style/css');

require('antd/lib/menu/style/css');

require('antd/lib/modal/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _moreVert = require('react-icons/lib/md/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _Inputs = require('../Inputs/Inputs');

var _Inputs2 = _interopRequireDefault(_Inputs);

var _FormModal = require('../FormModal/FormModal');

var _FormModal2 = _interopRequireDefault(_FormModal);

var _NavLink = require('../../core/NavLink/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OMIT_FIELDS = ['page', 'limit'];

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

var SavedSearchBar = (0, _reactRouter.withRouter)(_class = function (_React$Component) {
  _inherits(SavedSearchBar, _React$Component);

  function SavedSearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SavedSearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SavedSearchBar.__proto__ || Object.getPrototypeOf(SavedSearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.getState(_this.props), _this.onChange = function (name) {
      return function (value) {
        var inputValues = _this.state.inputValues;

        inputValues[name] = value;
        _this.setState({ inputValues: inputValues });
      };
    }, _this.onSearch = function () {
      _this.props.history.push({ query: _this.toQueries() });
    }, _this.onMenuClick = function (e) {
      _this[e.key]();
    }, _this.saveSearch = function () {
      var savedSearchs = _this.props.savedSearchs;

      _FormModal2.default.open({
        items: [{
          type: 'AutoComplete',
          name: 'name',
          placeholder: t.name,
          rules: [{ required: true }],
          dataSource: savedSearchs.map(function (v) {
            return v.name;
          })
        }],
        onSave: function onSave(inputValues) {
          var savedSearchs = _this.props.savedSearchs;

          var found = savedSearchs.find(function (v) {
            return v.name === inputValues.name;
          });
          var query = _this.toQueries(_this.state.inputValues);
          if (found) found.query = query;else savedSearchs.push({ name: inputValues.name, query: query });
          _this.props.onUpdate(savedSearchs);
        }
      });
    }, _this.deleteSearch = function () {
      _modal2.default.confirm({
        title: t.confirmDelete,
        onOk: function onOk() {
          var savedSearchs = _this.props.savedSearchs;
          var currentSavedSearch = _this.state.currentSavedSearch;

          (0, _lodash.remove)(savedSearchs, { name: currentSavedSearch.name });
          _this.props.onUpdate(_this.props.savedSearchs);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // state: {
  //   status: 'root', saved', 'custom'    // show differnt menu based on it
  //   currentSavedSearch                  // for delete
  //   inputValues: { [name]: value },     // for value/onChange
  // }


  _createClass(SavedSearchBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          match = _props.match,
          location = _props.location,
          savedSearchs = _props.savedSearchs,
          items = _props.items;
      var _state = this.state,
          inputValues = _state.inputValues,
          status = _state.status;

      var dropdownMenu = _react2.default.createElement(
        _menu2.default,
        { onClick: this.onMenuClick },
        status === 'custom' && _react2.default.createElement(
          _menu2.default.Item,
          { key: 'saveSearch' },
          t.saveSearch
        ),
        status === 'saved' && _react2.default.createElement(
          _menu2.default.Item,
          { key: 'deleteSearch' },
          t.deleteSearch
        )
      );

      return _react2.default.createElement(
        Root,
        null,
        _react2.default.createElement(
          'div',
          { className: 'tabbar' },
          _react2.default.createElement(
            'div',
            { className: 'tabs' },
            _react2.default.createElement(
              _NavLink2.default,
              { to: match.url, exact: true, omit: OMIT_FIELDS },
              t.all
            ),
            savedSearchs.map(function (v) {
              return _react2.default.createElement(
                _NavLink2.default,
                {
                  key: v.name,
                  to: { pathname: match.url, query: v.query },
                  omit: OMIT_FIELDS
                },
                v.name
              );
            }),
            status === 'custom' && _react2.default.createElement(
              _NavLink2.default,
              {
                to: { pathname: match.url, query: location.query },
                omit: OMIT_FIELDS
              },
              t.customSearch
            )
          ),
          status !== 'root' && _react2.default.createElement(
            _dropdown2.default,
            {
              overlay: dropdownMenu,
              trigger: ['click'],
              placement: 'bottomRight'
            },
            _react2.default.createElement(_moreVert2.default, { className: 'dropdown', button: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'searchItems' },
          items.map(function (_ref2) {
            var type = _ref2.type,
                name = _ref2.name,
                rest = _objectWithoutProperties(_ref2, ['type', 'name']);

            var INPUT = _Inputs2.default[type];
            return _react2.default.createElement(INPUT, _extends({
              key: name,
              className: 'item',
              value: inputValues[name],
              onChange: _this2.onChange(name),
              onSearch: _this2.onSearch
            }, rest));
          })
        )
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getState(nextProps));
    }

    // return { inputValues, status, currentSavedSearch }

  }, {
    key: 'getState',
    value: function getState(props) {
      var savedSearchs = props.savedSearchs,
          location = props.location,
          items = props.items;

      var locationQuery = _lodash.omit.apply(undefined, [location.query].concat(OMIT_FIELDS));

      // if loading, savedSearchs is [].
      // if deleted, savedSearch is null
      var found = savedSearchs.find(function (v) {
        return (0, _lodash.isEqual)(v.query, locationQuery);
      });
      var query = found ? found.query : location.query;
      var inputValues = this.parseQueries(query, items);

      var status = (0, _lodash.isEmpty)(locationQuery) ? 'root' : found ? 'saved' : 'custom';

      return { inputValues: inputValues, status: status, currentSavedSearch: found };
    }
  }, {
    key: 'parseQueries',


    // {tags: 'a,b'} -> {tags: ['a', 'b']}
    value: function parseQueries(query, items) {
      var inputValues = {};
      items.forEach(function (item) {
        inputValues[item.name] = _Inputs2.default[item.type].parseQuery(query[item.name] || '');
      });
      return inputValues;
    }

    // {tags: ['a', 'b']} -> {tags: 'a,b'}

  }, {
    key: 'toQueries',
    value: function toQueries() {
      var _this3 = this;

      var query = {};
      this.props.items.forEach(function (item) {
        var value = _this3.state.inputValues[item.name];
        if (!(0, _lodash.isEmpty)(value)) query[item.name] = _Inputs2.default[item.type].toQuery(value);
      });
      return query;
    }
  }]);

  return SavedSearchBar;
}(_react2.default.Component)) || _class;

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'SavedSearchBar__Root',
  componentId: 'mrvu7b-0'
})(['.tabbar{background:#f5f6f7;border-radius:3px 3px 0 0;display:flex;align-items:center;> .tabs{flex:1;display:flex;}a{color:#707070;padding:15px 20px;border-right:1px solid #ebeef0;border-bottom:1px solid #ebeef0;cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;height:100%;text-decoration:none;&.active{color:#1a1a1a;background-color:#ffffff;border-bottom-color:#ffffff;cursor:default;}}}.searchItems{padding:24px;display:flex;> .item{width:30%;}}']);

var TRANSLATIONS = {
  en: {
    name: 'Name',
    all: 'All',
    customSearch: 'Custom Search',
    saveSearch: 'Save this search',
    deleteSearch: 'Remove this search',
    confirmDelete: 'Delete this Search?'
  },
  zh: {
    name: '名称',
    all: '所有',
    customSearch: '自定义',
    saveSearch: '保存这个搜索',
    deleteSearch: '删除这个搜索',
    confirmDelete: '确定删除这个搜索?'
  }
};
var t = TRANSLATIONS[window.locale];

exports.default = SavedSearchBar;