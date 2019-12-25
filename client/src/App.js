import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Room from './components/Room/Room'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/room' exact component={Room} />
    </Router>    
  );
}

export default App;
