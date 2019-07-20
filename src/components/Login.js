import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';
import { createSession } from '../services/api';
import styles from './Login.module.css';

// komponente bez state-a
// appState u container
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
        <div className={styles.wrapper}>
            <div className={styles.loginTab}>Login</div>
            <input type="text"
                placeholder="Username" name="username" id="username"></input>
            <input type="password"
                placeholder="Password" name="password" id="password"></input>
            <div className={styles.rememberMe}>
                <input type="checkbox" placeholder="Password" name="password" id="password"></input>
                Remember me
            </div>
            <div className={styles.button}>
                <Link to='/'><button
                    onClick={login}
                    className={styles.btn}>
                    Login</button></Link>
            </div>
            <div className={styles.noAccount}>
                <h3>Don't have an account?</h3>
            </div>
            <div className={styles.registerHere}>
                <Link to='/register'><p>Register here</p></Link>
            </div>
        </div>
    );
}

export const Login = observer(LoginComponent);