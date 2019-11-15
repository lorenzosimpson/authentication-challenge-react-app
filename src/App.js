import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

import Jokes from './components/Jokes'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Route exact path='/jokes' component={Jokes} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  );
}

export default App;
