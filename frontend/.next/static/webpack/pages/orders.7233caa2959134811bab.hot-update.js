webpackHotUpdate_N_E("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrdersPage; });\n/* harmony import */ var _Users_horse_Desktop_sites_wesbos_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ \"./components/styles/OrderItemStyles.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/horse/Desktop/sites/wesbos/sick-fits/frontend/pages/orders.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_horse_Desktop_sites_wesbos_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\\n    grid-gap: 4rem;\\n \\n \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_horse_Desktop_sites_wesbos_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    query USER_ORDERS_QUERY{\\n        allOrders {\\n            id\\n            charge\\n            total\\n            user {\\n                id\\n            }\\n            items {\\n                id\\n                name\\n                description\\n                price\\n                quantity\\n                photo {\\n                    image {\\n                        publicUrlTransformed\\n                    }\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar USER_ORDERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].ul(_templateObject2());\n_c = OrderUl;\n\nfunction countItemsInOrder(order) {\n  return order.items.reduce(function (tally, item) {\n    return tally + item.quantity;\n  }, 0);\n}\n\nfunction OrdersPage() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(USER_ORDERS_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading....\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 24\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 23\n  }, this);\n  var allOrders = data.allOrders;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Sick Fits - Your (\", allOrders.length, \") Orders\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: [\"You have \", allOrders.length, \" orders! \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(OrderUl, {\n      children: allOrders.map(function (order) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n            href: \"/order/\".concat(order.id),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"order-meta\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  children: [countItemsInOrder(order), \" Items\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  children: [\" \", order.items.length, \" Product\", order.items.length === 1 ? '' : 's']\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(order.total)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"images\",\n                children: order.items.map(function (item) {\n                  var _item$photo, _item$photo$image;\n\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                    src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,\n                    alt: item.name\n                  }, \"image-\".concat(item.id), false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 27\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(OrdersPage, \"Z+0LgrSWpTZsLds+tjQq9+67f1U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c2 = OrdersPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OrderUl\");\n$RefreshReg$(_c2, \"OrdersPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzPzU3ZWIiXSwibmFtZXMiOlsiVVNFUl9PUkRFUlNfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJjb3VudEl0ZW1zSW5PcmRlciIsIm9yZGVyIiwiaXRlbXMiLCJyZWR1Y2UiLCJ0YWxseSIsIml0ZW0iLCJxdWFudGl0eSIsIk9yZGVyc1BhZ2UiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJhbGxPcmRlcnMiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxrREFBSCxtQkFBdkI7QUF3QkMsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQUFiO0tBQU1GLE87O0FBTU4sU0FBU0csaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWlDO0FBQzdCLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLFdBQWlCRCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsUUFBOUI7QUFBQSxHQUFuQixFQUEyRCxDQUEzRCxDQUFQO0FBQ0g7O0FBQ2EsU0FBU0MsVUFBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUNEQywrREFBUSxDQUFDYixpQkFBRCxDQURQO0FBQUEsTUFDekJjLElBRHlCLGFBQ3pCQSxJQUR5QjtBQUFBLE1BQ25CQyxLQURtQixhQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxPQURZLGFBQ1pBLE9BRFk7O0FBRWhDLE1BQUdBLE9BQUgsRUFBWSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1osTUFBSUQsS0FBSixFQUFXLG9CQUFPLHFFQUFDLGdFQUFEO0FBQWMsU0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFIcUIsTUFJekJFLFNBSnlCLEdBSVpILElBSlksQ0FJekJHLFNBSnlCO0FBS2hDLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFBTTtBQUFBLHlDQUEwQkEsU0FBUyxDQUFDQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFRjtBQUFBLDhCQUFjRCxTQUFTLENBQUNDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZFLGVBR0EscUVBQUMsT0FBRDtBQUFBLGdCQUNLRCxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFBYixLQUFLO0FBQUEsNEJBQUkscUVBQUMsMEVBQUQ7QUFBQSxpQ0FDcEIscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWUEsS0FBSyxDQUFDYyxFQUFsQixDQUFWO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDQTtBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNJO0FBQUEsNkJBQUlmLGlCQUFpQixDQUFDQyxLQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUEsa0NBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxNQUFqQixjQUFpQ1osS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsRUFBM0IsR0FBZ0MsR0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBR0k7QUFBQSw0QkFBSUcsZ0VBQVcsQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBTUE7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSwwQkFDS2hCLEtBQUssQ0FBQ0MsS0FBTixDQUFZWSxHQUFaLENBQWdCLFVBQUFULElBQUk7QUFBQTs7QUFBQSxzQ0FDbkI7QUFDRix1QkFBRyxpQkFBRUEsSUFBSSxDQUFDYSxLQUFQLHFFQUFFLFlBQVlDLEtBQWQsc0RBQUUsa0JBQW1CQyxvQkFEdEI7QUFFRix1QkFBRyxFQUFFZixJQUFJLENBQUNnQjtBQUZSLHFDQUFtQmhCLElBQUksQ0FBQ1UsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEbUI7QUFBQSxpQkFBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBLE9BQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBO0FBQUEsa0JBREo7QUE0Qkg7O0dBakN1QlIsVTtVQUNXQyx1RDs7O01BRFhELFUiLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgT3JkZXJJdGVtU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVySXRlbVN0eWxlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFVTRVJfT1JERVJTX1FVRVJZe1xuICAgICAgICBhbGxPcmRlcnMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGNoYXJnZVxuICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgIHVzZXIge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcbiBjb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDRyZW07XG4gXG4gYFxuIGZ1bmN0aW9uIGNvdW50SXRlbXNJbk9yZGVyKG9yZGVyKXtcbiAgICAgcmV0dXJuIG9yZGVyLml0ZW1zLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5xdWFudGl0eSwgMCk7XG4gfVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzUGFnZSgpe1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShVU0VSX09SREVSU19RVUVSWSk7XG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi4uPC9wPjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz4gO1xuICAgIGNvbnN0IHthbGxPcmRlcnN9ID0gZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZD48dGl0bGU+U2ljayBGaXRzIC0gWW91ciAoe2FsbE9yZGVycy5sZW5ndGh9KSBPcmRlcnM8L3RpdGxlPjwvSGVhZD5cbiAgICAgIDxoMj5Zb3UgaGF2ZSB7YWxsT3JkZXJzLmxlbmd0aH0gb3JkZXJzISA8L2gyPlxuICAgICAgICA8T3JkZXJVbD5cbiAgICAgICAgICAgIHthbGxPcmRlcnMubWFwKG9yZGVyID0+IDxPcmRlckl0ZW1TdHlsZXM+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9vcmRlci8ke29yZGVyLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291bnRJdGVtc0luT3JkZXIob3JkZXIpfSBJdGVtczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0e29yZGVyLml0ZW1zLmxlbmd0aCA9PT0gMSA/ICcnIDogJ3MnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKCA8aW1nIGtleT17YGltYWdlLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvT3JkZXJJdGVtU3R5bGVzPil9XG4gICAgICAgIFxuXG4gICAgICAgICAgICA8L09yZGVyVWw+XG4gICAgICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

})