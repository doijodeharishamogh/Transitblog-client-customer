import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Blogs from './components/Blogs'
import About from './components/about'
import Secret from './components/Secret';
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/register'



export class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <div className="App">
        <Route exact path = '/' component = {Blogs}/>
        <Route path="/secret" component={PrivateRoute(Secret)} />
        <Route path = '/about' component = {About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
    )
  }
}

export default App

