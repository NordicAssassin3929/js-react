import { appState } from "../state/AppState";

export function get(model, header) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'GET',
    headers: header
  })
    .then((res) => res.json());
}

export function createUser(data) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(err => console.log(err));
}

export function createSession(sessionData) {
  console.log(sessionData);
  console.log(JSON.stringify(sessionData));
  console.log(localStorage.getItem('pass'));
  return fetch(`https://flighter-hw7.herokuapp.com/api/session`, {
    method: 'POST',
    body: JSON.stringify(sessionData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      appState.token = res.session.token
      console.log(res.session.token);
      console.log(appState.token);
    });
}
