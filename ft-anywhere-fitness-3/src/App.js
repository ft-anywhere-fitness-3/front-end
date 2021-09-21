import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';
import ClassForm from './components/ClassForm';
import Instructor from './components/Instructor';
import Signup from './components/Signup';
import Home from './components/Home';
import StyledApp from './styledComponents/StyledApp';

function App() {
  return (
    <StyledApp className='App'>
      <nav>
        <Link to='/'>
          <h1 className='title-header'>Anywhere Fitness</h1>
        </Link>
        <div className='nav-links'>
          |<Link to='/'>Home</Link>
          |<Link to='/signup'>Signup</Link>
          |<Link to='/login'>Login</Link>
          |<Link to='/instructor'>Instructor</Link>
          |<Link to='/client'>Client</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/signup' component={Signup} />
        {/* These routes will need to be made into private routes eventually */}
        <Route path='/instructor' component={Instructor} />
        <Route path='/class-form' component={ClassForm} />
        <Route exact path='/' component={Home} />
      </Switch>
    </StyledApp>
  );
}

export default App;
