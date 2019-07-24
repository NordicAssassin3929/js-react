import React from 'react';
import { observer } from 'mobx-react';
import { createUser } from '../services/api';
import styles from './Register.module.css';
import { AppContext } from '../state/AppContext';
import useForm from 'react-hook-form';

export function RegisterComponent(props) {
    const { appState } = React.useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();

    const registerUser = (data) => {
        appState.email = data.email;
        appState.fullName = data.username;
        localStorage.setItem('pass', data.password);

        localStorage.setItem('pass', data.password);
        let userData = {
            user: {
                'email': `${appState.email}`,
                'first_name': `${appState.fullName}`,
                'last_name': `${appState.fullName}`,
                'password': `${localStorage.getItem('pass')}`    
            }
        };
        createUser(userData);
        props.history.push('/login');
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}
            className={styles.wrapper}>
            <div className={styles.registerHead}>Register</div>
            <input
                className="fullNamee"
                type="text"
                placeholder="Full name"
                name="username"
                ref={register({
                    required: 'First name is required!',
                })}>
            </input>
            {errors['username'] && errors['username'].message}
            <input
                className="emaill"
                type="email"
                placeholder="Email"
                name="email"
                ref={register({
                    required: 'ej daj majl',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'This is not an email format!',
                    },
                })}>
            </input>
            {errors['email'] && errors['email'].message}
            <input
                className="passwordd"
                type="password"
                placeholder="Password"
                name="password"
                ref={register({
                    validate: (value) => Boolean(value.length > 3) || 'Use a stronger password',
                })}>
            </input>
            {errors['password'] && errors['password'].message}
            <input 
            className="confirmPasswordd"
            type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                ref={register({
                    validate: (value) => Boolean(value.length > 3) || 'Use a stronger password',
                })}>
            </input>
            {errors['confirmPassword'] && errors['confirmPassword'].message}
            <div className={styles.yea}>
                <button
                    type="submit"
                    className={styles.btn}
                >Register</button>
            </div>
        </form>
    );
}

export const Register = observer(RegisterComponent);