import React from 'react';
import styles from './FlightDetails.module.css';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { useEffect } from 'react';
import { useState } from 'react';

export function FlightDetailsComponent(props) {
    const { appState } = React.useContext(AppContext);

    const [item, setItem] = useState({});

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
        props.history.push(`/flight-details/${appState.item.id}/modal`);
    }

    function backToHome() {
        props.history.goBack();
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
                <button onClick={backToHome} >Back to home page</button>
            </div>}
        </div>
    );
}

export const FlightDetails = observer(FlightDetailsComponent);