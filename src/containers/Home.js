import { observer } from 'mobx-react';
import { useEffectOnce } from 'react-use';
import { Link } from 'react-router-dom';
import { loadFlights } from '../services/flights';
import styles from './Home.module.css';
import { AppContext } from '../state/AppContext';
import React from 'react';
import {formatTime} from '../services/api';

export function HomeComponent(props) {
    const { appState } = React.useContext(AppContext);

    let headers = {
        'Authorization': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content': 'application/json'
    }

    useEffectOnce(() => {
        gettingFlights();
    });

    async function gettingFlights() {
        await loadFlights(appState, headers);
    }

    function myProfile() {
        props.history.push(`/profile`);
    }

    // if (!appState.isLoaded) {
    //     return <div>
    //         <p>Please register or log in</p>
    //         <Link to='/login'><button className="register">Login</button></Link>
    //         <Link to='/register'><button className="register">Register</button></Link>
    //     </div>
    // }
    // else {
    return (
        <div className={styles.container}>
            <h1 className={styles.hello}>Hello {appState.fullName}</h1>
            <button onClick={myProfile}>Visit your Profile!</button>
            <div className={styles.pageHeader}>
                <Link to='/login'><button className={styles.buttons}>Login</button></Link>
                <Link to='/register'><button className={styles.buttons}>Register</button></Link>
            </div>
            <div className={styles.bestFlights}>
                <p className={styles.find}>Find best flights for you and your friends!</p>
            </div>
            <div className={styles.pageItems}>
                <div className={styles.searchItem}>
                    <select>
                        <option value="1">01 FEB 2019.</option>
                        <option value="2">01 MAR 2019.</option>
                        <option value="3">01 JUNE 2019.</option>
                        <option value="4">01 JULY 2019.</option>
                    </select>
                </div>
                <div className={styles.searchItem}>
                    <input type="text"
                        className={styles.ams}
                        placeholder="Amsterdam">
                    </input>
                </div>
                <div className={styles.searchItem}><select>
                    <option value="1">4 PEOPLE</option>
                    <option value="2">2 PEOPLE</option>
                    <option value="3">3 PEOPLE</option>
                    <option value="4">5 PEOPLE</option>
                </select></div>
                <div className={styles.searchItem}>
                    <button className={styles.btn}>
                        Search
                    </button>
                </div>
            </div>
            <div className={styles.pageFooter}>
                {appState.flights.map(item => (
                    <Link key={item.id} to={`/flight-details/${item.id}`}>
                        <div key={item.id} className={styles.gridItem}>
                            <img src="https://loremflickr.com/300/200/plane" alt="preview"></img>
                            <div className={styles.info} >
                                <p>{formatTime(item.flys_at)} - {formatTime(item.lands_at)}</p>
                                Name: {item.name} <br />
                                Price: {item.current_price} <br />
                            </div>
                        </div>
                    </Link>))}
            </div>
        </div>
    );
    // }
}

export const Home = observer(HomeComponent);
