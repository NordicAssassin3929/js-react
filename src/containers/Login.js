import React from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';

export function Login() {
    return (
        <div className="wrapper">
            <div className="login">Login</div>
            <div className="username">
            <input type="text" placeholder="Username" name="username" id="username"></input>
            </div>
            <div className="password">
            <input type="text" placeholder="Password" name="password" id="password"></input>
            </div>
            <div className="remember_me">
            <input type="checkbox" placeholder="Password" name="password" id="password"></input>
            Remember me
            </div>
            <div className="button">
            <Link to='/'><button>Login</button></Link>
            </div>
            <div className="no_account">
            <p>Don't have an account?</p>
            </div>
            <div className="register">
            <Link to='/register'><p>Register here</p></Link>
            </div>
        </div>
    );
}