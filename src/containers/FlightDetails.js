import React from 'react';
import styles from './FlightDetails.module.css';
import { observer } from 'mobx-react';
import { getFlight } from '../services/api';
import { useAsync } from 'react-use';
import { AppContext } from '../state/AppContext';
import { loadFlight } from '../services/flights';
import { useEffect } from 'react';
import { useState } from 'react';

function formatTime(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const hours = date.substring(11, 13);
    const minutes = date.substring(14, 16);
    return `${day}. ${month}. ${year}, ${hours}:${minutes}`;
}

export function FlightDetailsComponent(props) {
    const { appState } = React.useContext(AppContext);

    const [item, setItem] = useState({});

    // useEffect ?

    let headers = {
        //'Authorization': `${appState.token}`,
        'Authorization': 'JPoX6jpA3kHWEjNkD3vqiRjA',
        'Accept': 'application/json',
        'Content': 'application/json'
    };

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://flighter-hw7.herokuapp.com/api/flights/${props.match.params.id}`, {
            method: 'GET',
            headers: headers
        });

        const item = await data.json();
        setItem(item.flight);
        appState.item = item.flight
        console.log(appState.item.id);
    };

    //const item = useAsync(getFlight.bind(null, match.params.id));
    function openModal() {
        props.history.push(`/flight-details/modal`);
      }

    return (
        <div className={styles.pageFooter}>
            {<div className={styles.gridItem} key={item.id}>
                <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                <div className={styles.info}>
                    Name: {item.name} <br />
                    Price: {item.current_price} <br />
                </div>
                <button onClick={openModal}>Book now!</button>
            </div>}
        </div>
    );
}

export const FlightDetails = observer(FlightDetailsComponent);