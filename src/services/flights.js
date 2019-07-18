import { get } from './api';

export function loadFlights(appState, headers) {
  return get('flights', headers)
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}

// export function createUser() {
//   return post('users')
//     .then((response) => console.log(response));
// }

// export function createSession(appState) {
//   return post('session')
//     .then((response) => console.log(response));
// }