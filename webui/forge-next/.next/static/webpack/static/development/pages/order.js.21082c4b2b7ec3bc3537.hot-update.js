webpackHotUpdate("static/development/pages/order.js",{

/***/ "./components/Orderform/index.js":
/*!***************************************!*\
  !*** ./components/Orderform/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orderform; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Orderform_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Orderform.scss */ "./components/Orderform/Orderform.scss");
/* harmony import */ var _Orderform_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Orderform_scss__WEBPACK_IMPORTED_MODULE_12__);














var Orderform =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Orderform, _Component);

  function Orderform(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Orderform);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Orderform).call(this, props));
    _this.props = props;
    _this.state = {
      email: '',
      order: '',
      description: '',
      quantity: '',
      metric: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Orderform, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log(this.state);
      console.log(this.state.name);
      console.log(this.state.order);
      alert('A name was submitted: ' + this.state.description);
      var data = {
        "$class": "org.forgesample.mynetwork.Item",
        "itemId": '_' + Math.random().toString(36).substr(2, 9),
        "NSN": "s",
        "serialNumber": "str",
        "description": "this is desc",
        "curentStatus": "str",
        "owner": "resource:org.forgesample.mynetwork.Owner#nithin",
        "transporter": "resource:org.forgesample.mynetwork.Transporter#ayan"
      };
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:3000/api/org.forgesample.mynetwork.Item', data).then(function (response) {
        console.log("sent");
        console.log(data); //console.log(response);
        //Perform action based on response
      }).catch(function (error) {
        console.log(error); //Perform action based on error
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "email", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Order", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "order",
        value: this.state.order,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Description", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "description",
        value: this.state.description,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "Submit"
      }));
    }
  }]);

  return Orderform;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // constructor(props){
//     super(props);
//     this.props = props;
//     this.state = {
//         email:'',order:'',description:'',quantity:'',metric:''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.state = {
//     //     formFields: {email:'', order:'', description:'', quantity:'', metric:''}
//     // }
//     // this.formHandler = this.formHandler.bind(this);
// }
// handleChange(event){
//     this.setState({[event.target.name]: event.target.value});
// }
// handleSubmit(event) {
//     console.log(this.state.description);
//     alert('A name was submitted: '+' '+this.state.name+' '+this.state.description);
//     event.preventDefault();
// }
// // handleChange = evt => {
// //     // This triggers everytime the input is changed
// //     this.setState({
// //         [e.target.name]: e.target.value
// //     });
// // };
// // handleSubmit(event) {
// //     event.preventDefault();
// //     const data = new FormData(event.target);
// //     console.log(data);
// //     fetch('orders', {
// //       method: 'POST',
// //       body: data,
// //     });
// //   }
// // handleSubmit = evt => {
// //     evt.preventDefault();
// //     //making a post request with the fetch API
// //     fetch('/orders', {
// //       method: 'POST',
// //       headers: {
// //             'Accept': 'application/json',
// //             'Content-Type': 'application/json'
// //       }, 
// //       body: JSON.stringify({
// //            description:this.state.item-descript
// //          })
// //       })
// //       .then(response => response.json())
// //       .then(data => console.log(data))
// //       .catch(error => console.log(error))
// //    }
// // value={this.state.email-id} onChange={this.handleChange}
// // value={this.state.order-id} onChange={this.handleChange}
// // value={this.state.item-descript} onChange={this.handleChange}
// // value={this.state.quantity-items} onChange={this.handleChange}
// // value={this.state.metric-select} onChange={this.handleChange}
// inputChangeHandler(e) {
//     let formFields = {...this.state.formFields};
//     formFields[e.target.name] = e.target.value;
//     this.setState({
//      formFields
//     });
// }
// formHandler(formFields) {
//     console.log("backchodei");
//     console.log("wtffffff");
//     console.log(formFields);
//     console.log("behenchod");
//     //this.setState({ [evt.target.name]: evt.target.value });
//     // var data = {
//     //     "$class": "org.forgesample.mynetwork.Item",
//     //     "itemId": '_' + Math.random().toString(36).substr(2, 9),
//     //     "NSN": "s",
//     //     "serialNumber": "string",
//     //     "description": "hjtgykbj",
//     //     "curentStatus": "string",
//     //     "owner": "resource:org.forgesample.mynetwork.Owner#nithin",
//     //     "transporter": "resource:org.forgesample.mynetwork.Transporter#ayan"
//     //   }
//     // axios.post('http://localhost:3000/api/org.forgesample.mynetwork.Item', data)
//     //   .then(function(response){
//     //       console.log("sent");
//     //     //console.log(response);
//     //     //Perform action based on response
//     // })
//     //   .catch(function(error){
//     //     console.log(error);
//     //     //Perform action based on error
//     //   });
// }
// render(){
//     return (
//         <Form onsubmit={this.handleSubmit}>
//             <FormGroup>
//                 <Input type="email" name="email" value={this.state.name} id="owneremail" placeholder="Email" onChange={this.handleChange} />
//             </FormGroup>
//             <FormGroup>
//                 <Input type="text" name="order" value={this.state.order} id="orderid" placeholder="OrderID" onChange={this.handleChange}  />
//             </FormGroup>
//             <FormGroup>
//                 <Input type="textarea" name="description" value={this.state.description} id="description" placeholder="Order Details" onChange={this.handleChange}  />
//             </FormGroup>
//             <InputGroup>
//                 <Input type="number" name="quantity" value={this.state.quantity} id="itemqty" placeholder="Qty of units" onChange={this.handleChange}  />
//                 <Input type="select" name="metric" value={this.state.metric} id="qtymetric" onChange={this.handleChange} >
//                     <option value="kg">Kilograms</option>
//                     <option value="g">Grams</option>
//                     <option value="units">Units</option>
//                 </Input>
//             </InputGroup>
//             <Button>Submit</Button>
//         </Form>
//     );
// }
//}




/***/ })

})
//# sourceMappingURL=order.js.21082c4b2b7ec3bc3537.hot-update.js.map