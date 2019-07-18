import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';
import { createSession } from '../services/api';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';


function login() {
    let sessionData = {
        session: {
            'email': `${appState.email}`,
            'password': localStorage.getItem('pass')
        }
    };
    (async () => {
        await createSession(sessionData);
    })();
}

export function LoginComponent() {
    return (
        <div className="wrapper">
            <div className="login-tab">Login</div>
            <div className="username">
                <input type="text"
                    placeholder={`${appState.fullName}`} name="username" id="username"></input>
            </div>
            <div className="password">
                <input type="password"
                    placeholder={`${appState.password}`} name="password" id="password"></input>
            </div>
            <div className="remember_me">
                <input type="checkbox" placeholder="Password" name="password" id="password"></input>
                Remember me
            </div>
            <div className="button">
            <Link to='/'><button
                    onClick={login}
                    className="btn">
                    Login</button></Link>
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

export const Login = observer(LoginComponent);