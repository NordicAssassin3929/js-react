import React from 'react';
import ReactDOM from 'react-dom';
import { useLocalStorage } from 'react-use';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { Home } from './containers/Home';
import { FlightDetails } from './containers/FlightDetails';
import { FlightDetailsModal } from './containers/FlightDetailsModal';

function PrivateRoute({ isLoggedIn, Component, ...rest }) {
  function render(props) {
    return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  }

  return <Route {...rest} component={render} />;
}

function App() {
  // const [loggedIn, setLoggedIn] = useLocalStorage('token', '');

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/flight-details/:id" component={FlightDetails} />
      <Route exact path="/flight-details/:id/modal" component={FlightDetailsModal} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <PrivateRoute isLoggedIn={Boolean(loggedIn)} path="/error" Component={Error} /> */}
    </Router>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root'));
