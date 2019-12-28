import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Room from './components/Room/Room'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/room' exact component={Room} />
        <Route component={NotFound} />
      </Switch>

    </Router>    
  );
}

export default App;
