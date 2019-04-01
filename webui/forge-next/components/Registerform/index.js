import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText , InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registerform.scss';


export default class Registerform extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.emailRef = React.createRef();
        this.confemailRef = React.createRef();
    };

    confirmEmail(){
        const email =this.emailRef.current.value;
        const conemail = this.confemailRef.current.value;
        if(email !== conemail){
            alert("Email Addresses don't match!");
            console.log("Not same");
            return false;
        }else {
            console.log("Same");
        }

    }

    render(){
        return (
            <Form>
                <FormGroup>
                    <Input type="text" name="firstname" id="fname" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="lastname" id="lname" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    <Input type="email" ref={this.emailRef} name="emailaddr" required placeholder="Email Address"/>
                </FormGroup>
                <FormGroup>
                    <Input type="email" ref={ this.confemailRef } name="confemailaddr" required placeholder="Confirm Email Address"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="passwd" placeholder="Password"/>
                </FormGroup>
                <Button onClick={this.confirmEmail.bind(this)}>Submit</Button>
            </Form>
        )
    };
};