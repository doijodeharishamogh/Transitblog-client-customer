import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Blogs from './components/Blogs'
import Comments from './components/Comments'
import About from './components/about'
import Login from './components/login'
import Register from './components/register'

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className='App'>
          <Route exact path='/' component={Blogs} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/comment/:id' component={Comments} />
        </div>
      </Router>
    )
  }
}

export default App
