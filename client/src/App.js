import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Room from './components/Room'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/Room' exact component={Room} />
    </Router>
    
  );
}

export default App;
