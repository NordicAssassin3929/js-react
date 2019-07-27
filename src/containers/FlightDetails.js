import React from 'react';
import styles from './FlightDetails.module.css';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { useEffectOnce } from 'react-use';
import { loadFlight } from '../services/flights';
import { getUser } from '../services/flights';

export function FlightDetailsComponent(props) {
    const { appState } = React.useContext(AppContext);

    let headers = {
        'Authorization': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content': 'application/json'
      }

    useEffectOnce(() => {
        gettingFlight();
    });

    async function gettingFlight() {
        console.log('props.match.params.id: ' + props.match.params.id);
        appState.id = props.match.params.id;
        console.log('appState.id: ' + appState.id);
        await loadFlight(appState, headers, props.match.params.id);
    }

    function openModal() {
        props.history.push(`/flight-details/${props.match.params.id}/modal`);
    }

    function backToHome() {
        props.history.goBack();
    }

    function myBookings() {
        props.history.push(`/profile`);    
    }

    return (
        <div className={styles.pageFooter}>
            {<div className={styles.gridItem} key={appState.flight.id}>
                <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                <div className={styles.info}>
                    Name: {appState.flight.name} <br />
                    Price: {appState.flight.current_price} <br />
                </div>
                <button onClick={myBookings}>My Bookings</button>
                <button onClick={openModal}>Book now!</button>
                <button onClick={backToHome} >Back to home page</button>
            </div>}
        </div>
    );
}

export const FlightDetails = observer(FlightDetailsComponent);