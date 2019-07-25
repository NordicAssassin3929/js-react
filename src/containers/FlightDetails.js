import React from 'react';
import styles from './FlightDetails.module.css';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { useState } from 'react';
import { useAsync, useEffectOnce } from 'react-use';
import { getFlight } from '../services/api';
import { useEffect } from 'react';
import { loadFlight } from '../services/flights';

export function FlightDetailsComponent(props) {
    const { appState } = React.useContext(AppContext);
    
    useEffectOnce(() => {
        gettingFlight();
    });

    async function gettingFlight() {
        appState.id = props.match.params.id;
        console.log(appState.id);
        await loadFlight(appState, appState.id);
    }

    // useAsync(getFlight(props.match.params.id)
    //     .then((res) => res.json())
    //     .then((res) =>
    //         console.log(res.flight)
    //     )
    // );

    function openModal() {
        props.history.push(`/flight-details/${props.match.params.id}/modal`);
    }

    function backToHome() {
        props.history.goBack();
    }

    return (
        <div className={styles.pageFooter}>
            {<div className={styles.gridItem} key={appState.flight.id}>
                <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                <div className={styles.info}>
                    Name: {appState.flight.name} <br />
                    Price: {appState.flight.current_price} <br />
                </div>
                <button onClick={openModal}>Book now!</button>
                <button onClick={backToHome} >Back to home page</button>
            </div>}
        </div>
    );
}

export const FlightDetails = observer(FlightDetailsComponent);