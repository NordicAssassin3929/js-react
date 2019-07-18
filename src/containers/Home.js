import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';
import { useAsync } from 'react-use';
import { Flight } from '../components/Flight';
import { Link } from 'react-router-dom';
import { loadFlights } from '../services/flights';
import './Home.css';

export function HomeComponent() {
    (async () => {
        let headers = {
            'Authorization': `${appState.token}`,
            'Accept': 'application/json',
            'Content': 'application/json'
        };
        if (!appState.token) {
            console.log('No token');
        }
        else {
            await loadFlights(appState, headers);
        }
    })();

    function onFilterChange(e) {
        appState.flightFilter = e.target.value;
    }

    if (!appState.token) {
        return <div>
            <p>Please register</p>
            <Link to='/register'><button className="register">Register</button></Link>
        </div>
    }
    else {
        return (
            <div className="container">
            <h1 className="hello">Hello {appState.fullName}</h1>
                <div className="page-header">
                    <Link to='/login'><button className="login">Login</button></Link>
                    <Link to='/register'><button className="register">Register</button></Link>
                </div>
                <div className="page-main">
                    <div className="best-flights">
                        <p className="find">Find best flights for you and your friends!</p>
                    </div>
                    <div className="search-item">
                        <select>
                            <option value="1">01 FEB 2019.</option>
                            <option value="2">01 MAR 2019.</option>
                            <option value="3">01 JUNE 2019.</option>
                            <option value="4">01 JULY 2019.</option>
                        </select>
                    </div>
                    <div className="search-item"><title className="ams">Amsterdam</title></div>
                    <div className="search-item"><select>
                        <option value="1">4 PEOPLE</option>
                        <option value="2">2 PEOPLE</option>
                        <option value="3">3 PEOPLE</option>
                        <option value="4">5 PEOPLE</option>
                    </select></div>
                    <div className="search-item">
                    <button className="btn">Search</button>
                </div>
                </div>             
                <div className="list">
                    {appState.filteredFlights.map((flight) => (
                        <Flight flight={flight} key={flight.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export const Home = observer(HomeComponent);
