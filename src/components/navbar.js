import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function navbar() {
    return (
        <nav> 
            <div className = "nav-wrapper red darken-3">
                <a className = "brand-logo center">
                    <i class="large material-icons">flight</i>
                    <span>Transit-Blog</span>
                </a>
                <ul className = "right hide-on-med-and-down">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
