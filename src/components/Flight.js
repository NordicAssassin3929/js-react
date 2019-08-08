import React from 'react';
import styles from './Flight.module.css';
import { observer } from 'mobx-react';
import { formatTime} from './api'

export function FlightComponent({ flight }) {
    console.log(flight.id);
    return (
        <div className={styles.pageFooter}>
            <div className={styles.gridItem} key={flight.id}>
                <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                <div className={styles.info}>
                    <p>{formatTime(flight.flys_at)} - {formatTime(flight.lands_at)}</p>
                    Name: {flight.name} <br />
                    Price: {flight.current_price} <br />
                </div>
            </div>
        </div>
    );
}

export const Flight = observer(FlightComponent);