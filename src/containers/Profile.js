import React from 'react';
import { AppContext } from '../state/AppContext';
import { observer } from 'mobx-react';
import { useEffectOnce } from 'react-use';
import { getUser } from '../services/users';
import styles from './Home.module.css';

export function ProfileComponent(props) {
    const { appState } = React.useContext(AppContext);

    let headers = {
        'Authorization': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content': 'application/json'
    }

    useEffectOnce(() => {
        getIt();
    });

    async function getIt() {
        console.log('appState.userId:' + appState.userId);
        await getUser(appState, headers, appState.userId);
    }

    function backToHome() {
        props.history.goBack();
    }

    function logout(){
        localStorage.setItem('token', '');   
        props.history.push('/login'); 
    }

    function edit() {
        props.history.push('/profile/modal');
        // POST REQUEST TO EDIT USER DETAILS
    }
    
    return (
        <div>
            <div className={styles.pageHeader}>
                <h4 className={styles.pageHeaderItems}>Hi {appState.user.first_name}!</h4>
                <div className={styles.pageHeaderItems} onClick={logout}>
                    <button className={styles.buttons}>Logout</button></div>
            </div>
            <div className={styles.avatar}>
                <h3>Hi {appState.user.first_name} {appState.user.last_name}<br></br>
                    {appState.user.email}
                </h3>
                <button onClick={edit}>Edit</button><br></br>
                <img src={appState.imageUrl}
                    alt="avatar" height="150" width="150"></img>
            </div>
            My bookings:
            <div>
                {appState.bookings.map(booking => (
                    <div key={booking.id}>
                        no_of_seats: {booking.no_of_seats}
                        seat_price: {booking.seat_price}
                        flight_name: {booking.flight_name}
                    </div>
                ))}
            </div>
            <button onClick={backToHome}>Back</button>
        </div>
    );
}

export const Profile = observer(ProfileComponent);