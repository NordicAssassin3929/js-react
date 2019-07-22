import React from 'react';
import { observer } from 'mobx-react';
import styles from './FlightDetailsModal.module.css';
import { appState } from '../state/AppState';
import { useAsync } from 'react-use';
import { useEffect } from 'react';
import { createBooking } from '../services/api';
import { AppContext } from '../state/AppContext';

function FlightDetailsModalComponent(props) {
    const { appState } = React.useContext(AppContext);

    const HandleSubmit = () => {
        console.log('test');
        let sessionData = {
            booking: {
                "no_of_seats": 1,
                "flight_id": 44
            }
        };
        useAsync(createBooking.bind(null, appState, sessionData));
    }
    
    function closeModal() {
        props.history.goBack();
    }

    // useEffect(() => {
    //     createBooking();
    // }, []);

    // const createBooking = async () => {
    //     const data = await fetch(`https://flighter-hw7.herokuapp.com/api/bookings`, {
    //         method: 'POST',
    //         body: JSON.stringify(sessionData),
    //         headers: {
    //             'Authorization': 'JPoX6jpA3kHWEjNkD3vqiRjA',
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <h1>Hello from modal!</h1>
                <button onClick={closeModal} >Close</button>
                <button onClick={HandleSubmit} >Create Bookings</button>
            </div>
        </div>
    );
}

export const FlightDetailsModal = observer(FlightDetailsModalComponent);