import React, { Component } from 'react';
import Link from 'next/link';
import './Navbar.scss';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.props = props
    }

    render() {
        return (
            <nav>
                <div id="nav-cont">
                    <div id="nav-links">
                        <Link href="/">
                            <a title="Home">Home</a>
                        </Link>
                        <Link href="/login">
                            <a title="Login">Login</a>
                        </Link>
                        <Link href="/register">
                            <a title="Register">Register</a>
                        </Link>
                        <Link href="/order">
                            <a title="Submit an order">Submit an order</a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;