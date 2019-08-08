import { get } from './api';
import { post } from './api';
import { put } from './api';

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

// register
export function createUser(data, headers) {
    return post(`users`, data, headers)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
}

// Login
export function createSession(appState, sessionData, headers) {
    return post(`session`, sessionData, headers)
        .then(res => res.json())
        .then((res) => {
            appState.imageProfile = res.session.user.image_url;
            console.log(res);
            console.log(res.session.user.id);
            // user id for bookings set
            appState.userId = res.session.user.id;
            // token set
            localStorage.setItem('token', res.session.token);
            appState.token = res.session.token;
            // hello username set
            appState.fullName = res.session.user.first_name;
        });
}

// update user
export function updateUser(data, headers, appState) {
    return put(data, headers, appState)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

// Creating Booking
export function createBooking(sessionData, headers) {
    return post(`bookings`, sessionData ,headers)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

  