import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ClassForm from './components/ClassForm';
import Instructor from './components/Instructor';
import Signup from './components/Signup';
import Login from './components/Login'
import Logout from './components/Logout';
import Header from './components/Header';
import Home from './components/Home';
import StyledApp from './styledComponents/StyledApp';
import Client from './components/Client'

import axiosWithAuth from './components/utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [availableClasses, setAvailableClasses] = useState([]);

  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token')
      window.location.href = '#'
    })
  }

  return (
    <StyledApp className='App'>
      <Header logout={logout}/>
      <Switch>
        {/* These routes will need to be made into private routes eventually */}
        <Route path='/client'>
          <Client availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
        </Route>

        <Route path='/class-form'>
          <ClassForm availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
        </Route>

        <PrivateRoute path='/instructor' component={Instructor} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />

        <PrivateRoute path="/logout" component={Logout}/>
      
        <Route path='/login' component={Login}/>

        <Route path='/signup'>
          <Signup />
        </Route>
        
        <Route exact path='/' component={Home} />
      </Switch>
    </StyledApp>
  );
}

export default App;
