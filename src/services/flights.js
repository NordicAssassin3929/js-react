import { get } from './api';
import { getFlight } from './api';

export function loadFlights(appState, headers) {
  return get('flights', headers)
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}

export function loadFlight(appState, headers, id) {
  return getFlight(id, headers)
    .then((response) => response.flights)
    .then((flights) => (appState.id = id));
}

// export function createUser() {
//   return post('users')
//     .then((response) => console.log(response));
// }

// export function createSession(appState) {
//   return post('session')
//     .then((response) => console.log(response));
// }