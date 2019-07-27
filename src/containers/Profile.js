import React from 'react';
import { AppContext } from '../state/AppContext';
import { observer, PropTypes } from 'mobx-react';
import { useEffectOnce } from 'react-use';
import { getUser } from '../services/flights';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

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

    function edit(){
        props.history.push('/profile/modal');
        // POST REQUEST TO EDIT USER DETAILS
    }
    /*
    {user: {…}}
user: {id: 674, email: "example@example.com", first_name: "jon", last_name: "jones", image_url: null, …}
__proto__: Object
    */
    return (
        <div>
            <div className={styles.pageHeader}>
                    <h4>Hi {appState.user.first_name}!</h4>
                    <Link to='/login'><button className={styles.buttons}>Logout</button></Link>
                </div>
            <h3>Hi {appState.user.first_name} {appState.user.last_name}<br></br>
            {appState.user.email}
            </h3>
            <button onClick={edit}>Edit</button><br></br>
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