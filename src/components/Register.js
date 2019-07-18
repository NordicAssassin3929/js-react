import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { appState } from '../state/AppState';
import { createUser } from '../services/api';
import { observer } from 'mobx-react';
import { createSession } from '../services/api';

function setFullName(e) {
    appState.fullName = e.target.value;
}

function setEmail(e) {
    appState.email = e.target.value;
}

function setPassword(e) {
    appState.password = e.target.value;
}

function register(e) {
    let data = {
        user: {
            'email': `${appState.email}`,
            'first_name': `${appState.fullName}`,
            'last_name': `${appState.fullName}`,
            'password': `${appState.password}`    
        }
    };
    localStorage.setItem('pass', appState.password);
    
    createUser(data);
    console.log(appState.email);
    console.log(appState.password);    
    
}

export function RegisterComponent() {
    return (
        <div className="wrapper">
            <div className="register-head">Register</div>
            <div className="full_name">
                <input type="text"
                    onChange={setFullName}
                    placeholder="Full name" name="username" id="username"></input>
            </div>
            <div className="email">
                <input type="email"
                    onChange={setEmail}
                    placeholder="Email" name="password" id="password"></input>
            </div>
            <div className="password">
                <input type="password"
                    onChange={setPassword}
                    placeholder="Password" name="password" id="password"></input>
            </div>
            <div className="confirm_password">
                <input type="password" placeholder="Confirm Password" name="password" id="password"></input>
            </div>
            <div className="yea">
                <Link to='/login'><button
                    className="btn"
                    onClick={register}
                >Register</button></Link>
            </div>
        </div>
    );
}

export const Register = observer(RegisterComponent);