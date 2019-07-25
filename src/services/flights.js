import { get } from './api';

export function loadFlights(appState, headers) {
  return get('flights', appState, headers)
    .then((res) => res.json()
      .then((res) => {
        appState.flights = res.flights;
        //appState.isLoaded = true;
      })
    );
}

export function loadFlight(appState, id) {
  return get(`flights/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(id);
      console.log(res);
      appState.flight = res.flight;
    });
}

export function getUser(appState, id) {
  return get(`users/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(id);
      console.log(res);
    });
}

// export function createUser() {
//   return post('users')
//     .then((response) => console.log(response));
// }

// export function createSession(appState) {
//   return post('session')
//     .then((response) => console.log(response));
// }