import React, { Component } from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { Button, Form, FormGroup, Label, Input, FormText ,  InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orderform.scss';


export default class Orderform extends Component{
    constructor(props){
             super(props);
             this.props = props;
             this.state = { email:'',order:'',description:'',quantity:'',metric:''};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
             
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
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
                  }
            
                  

                axios.post('http://localhost:3000/api/org.forgesample.mynetwork.Item', data)
                  .then(function(response){
                      console.log("sent");
                      console.log(data);
                    //console.log(response);
                    //Perform action based on response
                })
                  .catch(function(error){
                    console.log(error);
                    //Perform action based on error
                  });
        event.preventDefault();
      }
    
    render() {
        return (
            

          <form onSubmit={this.handleSubmit}>
            <label>
              email
              <input type="text" name = "email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              Order
              <input type="text" name="order" value={this.state.order} onChange={this.handleChange} />
            </label>

            <label>
              Description
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }


    // constructor(props){
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

