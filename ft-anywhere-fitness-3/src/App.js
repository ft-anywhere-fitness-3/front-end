import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
