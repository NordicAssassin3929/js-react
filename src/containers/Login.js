import React from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';

export function Login() {
    return (
        <div className="wrapper">
            <div className="login-tab">Login</div>
            <div className="username">
            <input type="text" placeholder="Username" name="username" id="username"></input>
            </div>
            <div className="password">
            <input type="password" placeholder="Password" name="password" id="password"></input>
            </div>
            <div className="remember_me">
            <input type="checkbox" placeholder="Password" name="password" id="password"></input>
            Remember me
            </div>
            <div className="button">
            <Link to='/'><button className="btn">Login</button></Link>
            </div>
            <div className="no_account">
            <h3>Don't have an account?</h3>
            </div>
            <div className="register-here">
            <Link to='/register'><p>Register here</p></Link>
            </div>
        </div>
    );
}