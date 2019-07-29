import React from 'react';
import { observer } from 'mobx-react';
import { createSession } from '../services/api';
import styles from './Login.module.css';
import { AppContext } from '../state/AppContext';
import useForm from 'react-hook-form';

export function LoginComponent(props) {
    const { appState } = React.useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();

    async function registerSession(data){
        appState.email = data.email;
        appState.password = data.password;
        let sessionData = {
            session: {
                'email': `${data.email}`,
                'password': `${data.password}`
            }
        };
        await createSession(appState, sessionData);
        props.history.push('/');
    }

    return (
        <form onSubmit={handleSubmit(registerSession)}
            className={styles.wrapper}>
            <div
                className={styles.loginTab}>Login</div>
            <input
                type="text"
                placeholder="Username"
                name="email"
                ref={register({
                    required: 'Username is required!',
                })}>
            </input>
            {errors['username'] && errors['username'].message}
            <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register({
                    required: 'Password is required!',
                    validate: (value) => Boolean(value.length > 3) || 'Use a stronger password'
                })}>
            </input>
            {errors['password'] && errors['password'].message}
            <div
                className={styles.rememberMe}>
                <input
                    type="checkbox"
                    placeholder="checkbox"
                    name="checkbox">
                </input>
                {errors['password'] && errors['password'].message}
                Remember me
            </div>
            <div
                className={styles.button}>
                <button
                    type="submit"
                    className={styles.btn}>
                    Login</button>
            </div>
            <div
                className={styles.noAccount}>
                <h3>Don't have an account?</h3>
            </div>
            <div
                className={styles.registerHere}>
                <p>Register here</p>
            </div>
        </form>
    );
}

export const Login = observer(LoginComponent);