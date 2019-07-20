import React from 'react';
import { Link } from 'react-router-dom';
import { appState } from '../state/AppState';
import { createUser } from '../services/api';
import { observer } from 'mobx-react';
import { createSession } from '../services/api';
import styles from './Register.module.css';

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
        <div className={styles.wrapper}>
            <div className={styles.registerHead}>Register</div>
            <input type="text"
                onChange={setFullName}
                placeholder="Full name"
                name="username"
                id="username">
            </input>
            <input type="email"
                onChange={setEmail}
                placeholder="Email"
                name="password"
                id="password">
            </input>
            <input type="password"
                onChange={setPassword}
                placeholder="Password"
                name="password"
                id="password">
            </input>
            <input type="password"
                onChange={setPassword}
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword">
            </input>
            <div className={styles.yea}>
                <Link to='/login'><button
                    className={styles.btn}
                    onClick={register}
                >Register</button></Link>
            </div>
        </div>
    );
}

export const Register = observer(RegisterComponent);