import React from 'react';
import {Link} from 'react-router-dom';
import '../css/register.css';

export function Register() {
    return (
        <div className="wrapper">
            <div className="register">Register</div>
            <div className="full_name">
            <input type="text" placeholder="Full name" name="username" id="username"></input>
            </div>
            <div className="email">
            <input type="text" placeholder="Email" name="password" id="password"></input>
            </div>
            <div className="password">
            <input type="text" placeholder="Password" name="password" id="password"></input>
            </div>
            <div className="confirm_password">
            <input type="text" placeholder="Confirm Password" name="password" id="password"></input>
            </div>
            <div className="button">
            <Link to='/'><button>Login</button></Link>
            </div>
        </div>
    );
}