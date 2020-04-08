import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path = '/' component = {Home} />
        <Route path = '/about' component = {About} />
      </div>
    </Router>
  );
}

export default App;
