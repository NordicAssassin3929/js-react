import React from 'react';
import {Link} from 'react-router-dom';
import '../css/register.css';

export function Register() {
    return (
        <div className="wrapper">
            <div className="register-head">Register</div>
            <div className="full_name">
            <input type="text" placeholder="Full name" name="username" id="username"></input>
            </div>
            <div className="email">
            <input type="email" placeholder="Email" name="password" id="password"></input>
            </div>
            <div className="password">
            <input type="password" placeholder="Password" name="password" id="password"></input>
            </div>
            <div className="confirm_password">
            <input type="password" placeholder="Confirm Password" name="password" id="password"></input>
            </div>
            <div className="yea">
            <Link to='/'><button className="btn">Register</button></Link>
            </div>
        </div>
    );
}