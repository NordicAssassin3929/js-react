export function get(model, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'GET',
    headers: headers
  })
    .then((res) => res.json()
    );
}

export function getFlight(id) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/flights/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'JPoX6jpA3kHWEjNkD3vqiRjA',
        'Accept': 'application/json',
        'Content': 'application/json'
    }
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
      this.appState.token = res.session.token
    });
}

export function createBooking(sessionData) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/booking`, {
    method: 'POST',
    body: JSON.stringify(sessionData),
    headers: {
      'Authorization': 'JPoX6jpA3kHWEjNkD3vqiRjA',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
}
