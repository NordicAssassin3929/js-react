export function get(model, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'GET',
    headers: headers
  })
}

// Register
export function createUser(data, appState) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    }
    )
}

// Update User
export function updateUser(data, headers, appState) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/users/${appState.userId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    }
    )
}

// Login
export function createSession(appState, sessionData) {
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

// Creating Booking
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


export function uploadPhoto(body, appState) {
  return fetch('https://isa-js-upload.andreicek.dev/upload', {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body,
  }).then((response) => response.json())
    .then((res) => {
      console.log(res); 
      console.log(res.imageUrl); 
      appState.imageUrl = res.imageUrl;
    });
}


