import React from 'react';
import { observer } from 'mobx-react';
import styles from './FlightDetailsModal.module.css';
import { appState } from '../state/AppState';
import { useAsync } from 'react-use';
import { useEffect } from 'react';
import { createBooking } from '../services/api';
import { AppContext } from '../state/AppContext';
import { Link } from 'react-router-dom';

function FlightDetailsModalComponent(props) {
    const { appState } = React.useContext(AppContext);

    const HandleSubmit = () => {
        console.log('test');
        let sessionData = {
            booking: {
                "no_of_seats": 1,
                "flight_id": `${appState.item.id}`
            }
        };
        const item = useAsync(createBooking.bind(null, appState, sessionData));
        console.log(item);
        closeModal();
    }

    function closeModal() {
        props.history.goBack();
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <h1>Hello from modal!</h1>
                <button onClick={closeModal} >Close</button>
                <button onSubmit={HandleSubmit} >
                    Create Bookings
                </button>
                <div className={styles.searchItem}>
                    <select>
                        <option value="1">01 FEB 2019.</option>
                        <option value="2">01 MAR 2019.</option>
                        <option value="3">01 JUNE 2019.</option>
                        <option value="4">01 JULY 2019.</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export const FlightDetailsModal = observer(FlightDetailsModalComponent);