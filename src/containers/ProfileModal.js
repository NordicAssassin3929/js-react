import React from 'react';
import { observer } from 'mobx-react';
import styles from './ProfileModal.module.css';
import { updateUser } from '../services/api';
import { AppContext } from '../state/AppContext';
import useForm from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { uploadPhoto } from '../services/api';

// Authorization: 'EToCrsBQA2fkGPi3E51mqLaD',
// https://isa-js-upload.andreicek.dev/upload

function ProfileModalComponent(props) {
    const { appState } = React.useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const [file, setFile] = useState(null);

    function onDrop(files) {
        console.log(files[0]);
        setFile(files[0]);
        console.log(file);
    }

    function upload() {
        const body = new FormData();
        body.append('image', file);
        uploadPhoto(body, appState);
    }

    async function editUser(data) {
        console.log('edit user');
        console.log(data);
        console.log(localStorage.getItem('token'));
        /*
        {username: "natan", email: "example@example.com", password: "1221"}
        */
        // password: secret1
        let sessionData = {
            "user": {
                "email": data.email,
                "first_name": data.username,
                "last_name": appState.user.last_name,
                "password": data.password,
                "image_url": appState.imageUrl
            }
        };
        let headers = {
            'Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        };
        updateUser(sessionData, headers, appState);
    }

    function closeModal() {
        props.history.goBack();
    }

    return (
        <div className={styles.modalContainer}>
            <div>
                <h1>Edit profile</h1>
                <img src={appState.imageUrl}
                    alt="Smiley face" height="150" width="42"></img>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ?
                        <p>Drop your file!</p> :
                        <p>Drag and drop your files here!</p>
                    }
                </div>
                <button onClick={upload}>Upload Photo</button>
                <button onClick={closeModal}>Close</button>
            </div>
            <form onSubmit={handleSubmit(editUser)}>
                <div className={styles.modalContent}>
                    <br></br>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={appState.user.first_name}
                        name="username"
                        ref={register({
                            required: 'Username is required!',
                        })}>
                    </input>
                    {errors['username'] && errors['username'].message}
                    <br></br>
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder={appState.user.email}
                        name="email"
                        ref={register({
                            required: 'E-mail is required!',
                            validate: (value) => Boolean(value.length > 3) || 'Use a stronger password'
                        })}
                    >
                    </input>
                    {errors['password'] && errors['password'].message}
                    <br></br>
                    <label>Old password</label>
                    <input
                        type="password"
                        placeholder="Old password"
                        name="oldPassword"
                    // ref={register({
                    //     required: 'Password is required!',
                    //     validate: (value) => Boolean(value.length > 3) || 'Use a stronger password'
                    // })}
                    >
                    </input>
                    {errors['password'] && errors['password'].message}
                    <br></br>
                    <label>New password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        ref={register({
                            required: 'Password is required!',
                            validate: (value) => Boolean(value.length > 3) || 'Use a stronger password'
                        })}
                    >
                    </input>
                    {errors['password'] && errors['password'].message}
                    <br></br>
                    <label>Confirm password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                    // ref={register({
                    //     required: 'Password is required!',
                    //     validate: (value) => Boolean(value.length > 3) || 'Use a stronger password'
                    // })}
                    >
                    </input>
                    {errors['password'] && errors['password'].message}
                    <br></br>
                    <button
                        className="ddd"
                        type="submit">
                        Save changes
                </button>
                </div>
            </form>
        </div >
    );
}

export const ProfileModal = observer(ProfileModalComponent);