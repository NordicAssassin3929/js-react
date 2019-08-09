export function get(model, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'GET',
    headers: headers
  })
}

export function post(model, data, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers
  })
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

export function put(model, data, headers) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers
  })
}

// photo
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

// format time
export function formatTime(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const hours = date.substring(11, 13);
  const minutes = date.substring(14, 16);
  return `${day}. ${month}. ${year}, ${hours}:${minutes}`;
}


