export function get(model) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content': 'application/json'
    },
  })
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
    .then(res => console.log(res))
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
      console.log(res);
      localStorage.setItem('token', res.session.token);
      console.log(localStorage.getItem('token'));
      appState.fullName = res.session.user.first_name;
      console.log(appState.fullName);
    });
}

// Booking
export function createBooking(sessionData, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/bookings`, {
    method: 'POST',
    body: JSON.stringify(sessionData),
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
}

