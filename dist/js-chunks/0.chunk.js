(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./frontend/entries/baseEntry/index.js":
/*!*********************************************!*\
  !*** ./frontend/entries/baseEntry/index.js ***!
  \*********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\nvar React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\nvar ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n\nvar _require = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js"),\n    Provider = _require.Provider;\n\nvar _require2 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js"),\n    combineReducers = _require2.combineReducers,\n    createStore = _require2.createStore;\n\nfunction isReactReduxsetup() {\n  return window.store;\n}\n\nfunction setupInitialStore() {\n  window.store = configureStore();\n}\n\nfunction createReducer() {\n  var reducers = Object.assign({}, {\n    initial: {}\n  });\n  return combineReducers(reducers);\n}\n\nfunction configureStore() {\n  intialState = {};\n  var store = createStore(createReducer({}), intialState);\n  return store;\n}\n\nfunction initPage() {\n  var reactElementNodeIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  if (isReactReduxsetup()) {\n    window.isReactReduxSettingUp = false;\n    return new Promise(function (resolve) {\n      renderEverything(reactElementNodeIds);\n      resolve();\n    });\n  } else if (window.isReactReduxSettingUp) {\n    setTimeout(function () {\n      return initPage(reactElementNodeIds);\n    }, 10);\n  } else {\n    window.isReactReduxSettingUp = true;\n    return new Promise(function (resolve) {\n      setupInitialStore();\n      resolve();\n    }).then(function () {\n      return renderEverything(reactElementNodeIds);\n    });\n  }\n}\n\nfunction renderEverything(reactElementNodeIds) {\n  var _window = window,\n      store = _window.store;\n\n\n  renderReactElementsToNodeByIds(reactElementNodeIds, store);\n}\n\nfunction renderReactElementsToNodeByIds(elementByNodeIds, store) {\n  _.each(elementByNodeIds, function (ReactComponent, destinationId) {\n    return renderReactElementToNodeById(ReactComponent, destinationId, store);\n  });\n}\n\nfunction renderReactElementToNodeById(ReactComponent, destinationNodeId, store) {\n  var destinationNode = document.getElementById(destinationNodeId);\n  if (destinationNodeId === null) {\n    return null;\n  }\n\n  renderReactElementToNode(ReactComponent, destinationNode, store);\n}\n\nfunction renderReactElementToNode(ReactComponent, destinationNode, store) {\n\n  if (!destinationNode) {\n    return null;\n  }\n\n  ReactDOM.render(React.createElement(\n    Provider,\n    { store: store },\n    React.createElement(ReactComponent, null)\n  ), destinationNode);\n}\n\n//# sourceURL=webpack:///./frontend/entries/baseEntry/index.js?')},"./frontend/modules/recentWorks/components/ListRecentWorks.js":
/*!********************************************************************!*\
  !*** ./frontend/modules/recentWorks/components/ListRecentWorks.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ListRecentWorks = function (_Component) {\n  _inherits(ListRecentWorks, _Component);\n\n  function ListRecentWorks(props) {\n    _classCallCheck(this, ListRecentWorks);\n\n    var _this = _possibleConstructorReturn(this, (ListRecentWorks.__proto__ || Object.getPrototypeOf(ListRecentWorks)).call(this, props));\n\n    console.log("here you go");\n    return _this;\n  }\n\n  _createClass(ListRecentWorks, [{\n    key: "reneder",\n    value: function reneder() {\n      return _react2.default.createElement(\n        "div",\n        null,\n        "this is the list recent works"\n      );\n    }\n  }]);\n\n  return ListRecentWorks;\n}(_react.Component);\n\nmodule.exports = ListRecentWorks;\n\n//# sourceURL=webpack:///./frontend/modules/recentWorks/components/ListRecentWorks.js?')},"./frontend/modules/recentWorks/index.js":
/*!***********************************************!*\
  !*** ./frontend/modules/recentWorks/index.js ***!
  \***********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n\nvar _ListRecentWorks = __webpack_require__(/*! ./components/ListRecentWorks.js */ "./frontend/modules/recentWorks/components/ListRecentWorks.js");\n\nvar _ListRecentWorks2 = _interopRequireDefault(_ListRecentWorks);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n        recentWorkList: state.recentWorkList\n    };\n};\n\n// const mapDispatchToProps = (dispatch) => {\n//     return();\n// };\n\nvar RecentWorkApp = (0, _reactRedux.connect)(mapStateToProps)(_ListRecentWorks2.default);\n\nmodule.exports = RecentWorkApp;\n\n//# sourceURL=webpack:///./frontend/modules/recentWorks/index.js?')}}]);