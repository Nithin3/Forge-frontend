import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,  InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orderform.scss';


export default class Orderform extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <Form>
                <FormGroup>
                    <Input type="email" name="email-id" id="owneremail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="order-id" id="orderid" placeholder="OrderID" />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="item-descript" id="description" placeholder="Order Details" />
                </FormGroup>
                <InputGroup>
                    <Input type="number" name="quantity-items" id="itemqty" placeholder="Qty of units"/>
                    <Input type="select" name="metric-select" id="qtymetric">
                        <option value="kg">Kilograms</option>
                        <option value="g">Grams</option>
                        <option value="units">Units</option>
                    </Input>
                </InputGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

