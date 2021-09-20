import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import ClassForm from './components/ClassForm';
import Instructor from './components/Instructor';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup' component={Signup} />
        {/* These routes will need to be made into private routes eventually */}
        <Route path='/instructor' component={Instructor} />
        <Route path='/class-form' component={ClassForm} />
      </Switch>
    </div>
  );
}

export default App;
