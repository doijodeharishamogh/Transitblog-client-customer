import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <nav>
      <div className='nav-wrapper purple darken-3'>
        <a href='/' className='brand-logo center'>
          <i className='large material-icons'>flight</i>
          <span>Transit-Blog</span>
        </a>
        <ul className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Blogs</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar
