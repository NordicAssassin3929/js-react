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
      // 'Authorization': localStorage.getItem('token'),
      'Authorization': 'qumbgUVUZKurcNHZaJ2TDpTA',
      'Accept': 'application/json',
      'Content': 'application/json'
    }
  })
    .then((res) => res.json());
}

// Register
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
    .then(res => console.log(res));
}

// Login
export function createSession(appState, sessionData) {
  console.log('WORKS');
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
      localStorage.setItem('token', res.session.token);
      appState.fullName = res.session.user.first_name;
    });
}

// Booking
export function createBooking(appState, sessionData) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/bookings`, {
    method: 'POST',
    body: JSON.stringify(sessionData),
    headers: {
      'Authorization': `JPoX6jpA3kHWEjNkD3vqiRjA`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
}
