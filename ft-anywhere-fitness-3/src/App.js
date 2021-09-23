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
import EditClassForm from './components/EditClassForm';
import OnboardingInstructor from './components/OnboardingInstructor';

import PrivateRoute from './components/PrivateRoute';
import InstructorRoute from './components/InstructorRoute';


function App() {
  const [availableClasses, setAvailableClasses] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <StyledApp className='App'>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        {/* These routes will need to be made into private routes eventually */}
        <Route path='/client'>
          <Client availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
        </Route>

        <InstructorRoute path='/class-form/edit/:id' component={EditClassForm} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses}/>

        <InstructorRoute path='/class-form' component={ClassForm} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />

        <Route path='/instructor/welcome'>
          <OnboardingInstructor />
        </Route>

        <InstructorRoute path='/instructor' component={Instructor} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />

        <PrivateRoute path="/logout" component={Logout} setLoggedIn={setLoggedIn} />
      
        <Route path='/login' render={(props) => (
          <Login {...props} isLoggedIn={isLoggedIn} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} setLoggedIn={setLoggedIn} />
        )} />

        <Route path='/signup'>
          <Signup />
        </Route>
        
        <Route exact path='/' component={Home} />
      </Switch>
    </StyledApp>
  );
}

export default App;
