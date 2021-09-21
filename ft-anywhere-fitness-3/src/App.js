import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import ClassForm from './components/ClassForm';
import Instructor from './components/Instructor';
import Signup from './components/Signup';
import Header from './components/Header';
import Home from './components/Home';
import StyledApp from './styledComponents/StyledApp';

import Client from './components/Client'



function App() {
  const [availableClasses, setAvailableClasses] = useState([]);

  return (
    <StyledApp className='App'>
      <Header />
      <Switch>
        <Route path='/signup' component={Signup} />
        {/* These routes will need to be made into private routes eventually */}
        <Route path='/client' component={Client}/>
        <Route path='/instructor' render={(props) => (
          <Instructor {...props} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
        )} />
        <Route path='/class-form' render={(props) => (
          <ClassForm {...props}  setAvailableClasses={setAvailableClasses} availableClasses={availableClasses} />
        )} />
        <Route exact path='/' component={Home} />
      </Switch>
    </StyledApp>
  );
}

export default App;
