import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Profile from './components/profile'
import Home from './components/home'
import Logout from './components/logout'
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.isLogged ?
      <Component {...props} />
      :
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

function App() {

  const isLogged = useSelector(state => state.userReducer.isLogged)

  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/home">Home</Link>
      <br />
      <br />
      <Logout />

      <Route exact={true} path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path='/home' component={Home} isLogged={isLogged} />
      <PrivateRoute path='/profile' component={Profile} isLogged={isLogged} />


    </div>
  );
}

export default App;
