import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Flight.module.css';

function formatTime(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const hours = date.substring(11, 13);
    const minutes = date.substring(14, 16);
    return `${day}. ${month}. ${year}, ${hours}:${minutes}`;
}

export function Flight({ flight }) {
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