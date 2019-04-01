webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/Registerform/index.js":
/*!******************************************!*\
  !*** ./components/Registerform/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Registerform; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Registerform_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Registerform.scss */ "./components/Registerform/Registerform.scss");
/* harmony import */ var _Registerform_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Registerform_scss__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/xteci/Development/Forge-frontend/webui/forge-next/components/Registerform/index.js";






var Registerform =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Registerform, _Component);

  function Registerform(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Registerform);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Registerform).call(this, props));
    _this.props = props;
    _this.emailRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.confemailRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Registerform, [{
    key: "confirmEmail",
    value: function confirmEmail() {
      var email = this.emailRef.current.value;
      var conemail = this.confemailRef.current.value;

      if (email !== conemail) {
        alert("Email Addresses don't match!");
        console.log("Not same");
        return false;
      } else {
        console.log("Same");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "text",
        name: "first-name",
        id: "fname",
        placeholder: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "text",
        name: "last-name",
        id: "lname",
        placeholder: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "email",
        ref: this.emailRef,
        id: "emailaddr",
        required: true,
        placeholder: "Email Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "email",
        ref: this.confemailRef,
        id: "confemailaddr",
        required: true,
        placeholder: "Confirm Email Address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "password",
        id: "passwd",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.confirmEmail.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return Registerform;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

/***/ })

})
//# sourceMappingURL=register.js.31f20c3b0f3202cb0f6e.hot-update.js.map