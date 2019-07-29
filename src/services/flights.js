import { get } from './api';

export function loadFlights(appState, headers) {
  return get('flights', headers)
    .then((res) => res.json()
      .then((res) => {
        console.log('res.flights: ' + res.flights);
        appState.flights = res.flights;
      })
    );
}

export function loadFlight(appState, headers, id) {
  return get(`flights/${id}`, headers)
    .then((res) => res.json())
    .then((res) => {
      console.log(id);
      console.log(res);
      appState.flight = res.flight;
    });
}

export function getUser(appState, headers, id) {
  return get(`users/${id}`, headers)
    .then((res) => res.json())
    .then((res) => {
      console.log(id);
      console.log(res.user.bookings);
      appState.bookings = res.user.bookings
      appState.user = res.user;
      console.log(res);
    });
}