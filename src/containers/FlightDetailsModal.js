import React from 'react';
import { observer } from 'mobx-react';
import styles from './FlightDetailsModal.module.css';
import { createBooking } from '../services/api';
import { AppContext } from '../state/AppContext';
import useForm from 'react-hook-form';

function FlightDetailsModalComponent(props) {
    const { appState } = React.useContext(AppContext);
    const { register, handleSubmit, errors } = useForm();

    const registerBooking = (data) => {
        console.log('test');
        console.log(appState.item.id)
        console.log(data);
        console.log(data.number);
        let sessionData = {
            "booking": {
                "no_of_seats": data.number,
                "flight_id": `${appState.item.id}`
            }
        };
        createBooking(appState, sessionData);
    }

    function closeModal() {
        props.history.goBack();
    }

    return (
        <form onSubmit={handleSubmit(registerBooking)} 
        className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <h1>Create booking</h1>
                <button onClick={closeModal} >Close</button>
                <h4>Number of passengers</h4>
                <select 
                name="number"
                ref={register}
                className={styles.searchItem}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button
                    className="ddd"
                    type="submit">
                    Confirm Booking
                </button>
            </div>
        </form>
    );
}

export const FlightDetailsModal = observer(FlightDetailsModalComponent);