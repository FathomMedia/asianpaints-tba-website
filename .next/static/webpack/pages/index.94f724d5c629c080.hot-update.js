"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Asian Paints\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/assets/apb_logo.png\",\n                            alt: \"logo\",\n                            width: 250,\n                            height: 50\n                        }, void 0, false, {\n                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                            initialValues: {\n                                name: \"\",\n                                phone: \"\"\n                            },\n                            validate: (values)=>{\n                                const errors = {};\n                                if (!values.name) {\n                                    errors.name = \"\";\n                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.name)) {\n                                    errors.name = \"Please input a valid name\";\n                                }\n                                return errors;\n                            },\n                            onSubmit: (values, param)=>{\n                                let { setSubmitting  } = param;\n                                setTimeout(()=>{\n                                    alert(JSON.stringify(values, null, 2));\n                                    setSubmitting(false);\n                                }, 400);\n                            },\n                            children: (param)=>/*#__PURE__*/ {\n                                let { values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"mb-2\",\n                                                    children: \"Full name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"name\",\n                                                    placeholder: \"Your full name\",\n                                                    name: \"name\",\n                                                    onChange: handleChange,\n                                                    onBlur: handleBlur,\n                                                    value: values.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"mb-2\",\n                                                    children: \"Phone number\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"phone\",\n                                                    name: \"phone\",\n                                                    placeholder: \"Mobile Number\",\n                                                    onChange: handleChange,\n                                                    onBlur: handleBlur,\n                                                    value: values.phone\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"mb-2\",\n                                                    children: \"Preferred time to contact\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    placeholder: \"Preferred time to contact\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        name: \"Morning\",\n                                                        children: \"Morning\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"mb-2\",\n                                                    children: \"Service you are interested in\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            name: \"color-consultation\",\n                                                            children: \"Color consultation\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            name: \"color-consultation\",\n                                                            children: \"Safe Painting Service (SPS)\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            disabled: isSubmitting,\n                                            children: \"Submit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rakanalbaiz/Documents/asianpaints-tba-website/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTUE7QUFQdUI7QUFDRztBQUNTO0FBQ1Y7QUFFZ0I7QUFJaEMsU0FBU00sT0FBTztJQUM3QixxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJQTs7a0NBQ0gsOERBQUNNO2tDQUFNOzs7Ozs7a0NBRVAsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVdWLHFFQUFXOzBCQUMxQiw0RUFBQ1c7O3NDQUNDLDhEQUFDWixtREFBS0E7NEJBQ0phLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ2xCLDBDQUFNQTs0QkFDTG1CLGVBQWU7Z0NBQUVaLE1BQU07Z0NBQUlhLE9BQU87NEJBQUc7NEJBQ3JDQyxVQUFVLENBQUNDLFNBQVc7Z0NBQ3BCLE1BQU1DLFNBQVMsQ0FBQztnQ0FDaEIsSUFBSSxDQUFDRCxPQUFPZixJQUFJLEVBQUU7b0NBQ2hCZ0IsT0FBT2hCLElBQUksR0FBRztnQ0FDaEIsT0FBTyxJQUNMLENBQUMsMkNBQTJDaUIsSUFBSSxDQUFDRixPQUFPZixJQUFJLEdBQzVEO29DQUNBZ0IsT0FBT2hCLElBQUksR0FBRztnQ0FDaEIsQ0FBQztnQ0FDRCxPQUFPZ0I7NEJBQ1Q7NEJBQ0FFLFVBQVUsQ0FBQ0gsZ0JBQThCO29DQUF0QixFQUFFSSxjQUFhLEVBQUU7Z0NBQ2xDQyxXQUFXLElBQU07b0NBQ2ZDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1IsUUFBUSxJQUFJLEVBQUU7b0NBQ25DSSxjQUFjLEtBQUs7Z0NBQ3JCLEdBQUc7NEJBQ0w7c0NBRUMsdUJBU0M7b0NBVEEsRUFDQUosT0FBTSxFQUNOQyxPQUFNLEVBQ05RLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsYUFBWSxFQUNiO3VDQUNDLDhEQUFDQztvQ0FBS1gsVUFBVVM7O3NEQUNkLDhEQUFDRzs7OERBQ0MsOERBQUNDO29EQUFHekIsV0FBVTs4REFBTzs7Ozs7OzhEQUVyQiw4REFBQzBCO29EQUNDQyxNQUFLO29EQUNMQyxhQUFZO29EQUNabEMsTUFBSztvREFDTG1DLFVBQVVWO29EQUNWVyxRQUFRVjtvREFDUlcsT0FBT3RCLE9BQU9mLElBQUk7Ozs7Ozs7Ozs7OztzREFHdEIsOERBQUM4Qjs7OERBQ0MsOERBQUNDO29EQUFHekIsV0FBVTs4REFBTzs7Ozs7OzhEQUNyQiw4REFBQzBCO29EQUNDQyxNQUFLO29EQUNMakMsTUFBSztvREFDTGtDLGFBQVk7b0RBQ1pDLFVBQVVWO29EQUNWVyxRQUFRVjtvREFDUlcsT0FBT3RCLE9BQU9GLEtBQUs7Ozs7Ozs7Ozs7OztzREFHdkIsOERBQUNpQjs7OERBQ0MsOERBQUNDO29EQUFHekIsV0FBVTs4REFBTzs7Ozs7OzhEQUNyQiw4REFBQ2dDO29EQUFPSixhQUFZOzhEQUNsQiw0RUFBQ0s7d0RBQU92QyxNQUFLO2tFQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHM0IsOERBQUM4Qjs7OERBQ0MsOERBQUNDO29EQUFHekIsV0FBVTs4REFBTzs7Ozs7OzhEQUNyQiw4REFBQ2dDOztzRUFDQyw4REFBQ0M7NERBQU92QyxNQUFLO3NFQUFxQjs7Ozs7O3NFQUdsQyw4REFBQ3VDOzREQUFPdkMsTUFBSztzRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLdEMsOERBQUN3Qzs0Q0FBT1AsTUFBSzs0Q0FBU1EsVUFBVWI7c0RBQWM7Ozs7Ozs7Ozs7Ozs0QkFHMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEIsQ0FBQztLQWpHdUIvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Bc2lhbiBQYWludHM8L3RpdGxlPlxuICAgICAgICB7LyogPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvYXBiX2xvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgd2lkdGg9ezI1MH1cbiAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6IFwiXCIsIHBob25lOiBcIlwiIH19XG4gICAgICAgICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMubmFtZSkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5uYW1lKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMubmFtZSA9IFwiUGxlYXNlIGlucHV0IGEgdmFsaWQgbmFtZVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHtcbiAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0yXCI+RnVsbCBuYW1lPC9oMz5cblxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTJcIj5QaG9uZSBudW1iZXI8L2gzPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5waG9uZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMlwiPlByZWZlcnJlZCB0aW1lIHRvIGNvbnRhY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBwbGFjZWhvbGRlcj1cIlByZWZlcnJlZCB0aW1lIHRvIGNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPVwiTW9ybmluZ1wiPk1vcm5pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTJcIj5TZXJ2aWNlIHlvdSBhcmUgaW50ZXJlc3RlZCBpbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9XCJjb2xvci1jb25zdWx0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb2xvciBjb25zdWx0YXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbmFtZT1cImNvbG9yLWNvbnN1bHRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIFNhZmUgUGFpbnRpbmcgU2VydmljZSAoU1BTKVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiRm9ybWlrIiwiUmVhY3QiLCJJbWFnZSIsInN0eWxlcyIsIkhvbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdGlhbFZhbHVlcyIsInBob25lIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwib25TdWJtaXQiLCJzZXRTdWJtaXR0aW5nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiZm9ybSIsImxhYmVsIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25CbHVyIiwidmFsdWUiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});