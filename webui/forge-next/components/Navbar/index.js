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
                <div>
                    <Link href="/">
                        <a title="Home">Home</a>
                    </Link>
                    <Link href="/login">
                        <a title="Login">Login</a>
                    </Link>
                    <Link href="/register">
                        <a title="Register">Register</a>
                    </Link>
                    <mark className="badge">Hello!</mark>
                </div>
            </nav>
        )
    }
}

export default Navbar;