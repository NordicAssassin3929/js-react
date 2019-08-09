import React from 'react';
import styles from './FlightDetails.module.css';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { useEffectOnce } from 'react-use';
import { loadFlight } from '../services/flights';
import { Link } from 'react-router-dom';

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

    return (
        <div key={appState.flight.id}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageHeaderItems} >Hi {appState.fullName}!</h1>
                <Link className={styles.pageHeaderItems} to='/login'>
                    <button className={styles.logout}>Logout</button></Link>
            </div>
            <div className={styles.title}>
                {appState.flight.name}
            </div>
            <div className={styles.contentAndImage}>
                <div className={styles.content}>
                    <h4>Company: <br></br>{appState.flight.company_name}</h4>
                    <h4>Available seats: <br></br>{appState.flight.no_of_seats}</h4>
                    <h4>Departs at: <br></br>{appState.flight.flys_at}</h4>
                    <h4>Lands at: <br></br>{appState.flight.lands_at}</h4>
                    <h4>Base price: <br></br>{appState.base_price}</h4>
                    <h4>Current price: <br></br>{appState.current_price}</h4>
                </div>
                <div className={styles.image}>
                    <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                </div>
            </div>
            <div className={styles.options}>
                <h4>Wireless internet</h4>
                <h4>Kids friendly</h4>
                <h4>TV available</h4>
                <h4>Meal included</h4>
            </div>
            <div className={styles.bookNowDiv}>
                <button onClick={openModal}
                    className={styles.bookNow}>Book now!</button>
            </div>
        </div>
    );
}

export const FlightDetails = observer(FlightDetailsComponent);