import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

function Headers() {
  return (
    <header className='header'>
      <div className='logo'>
        <NavLink to="/">
          <h1>WorldAtlas</h1>
          </NavLink>  
      </div>
      <nav className='navbar'> 
        <ul className='nav-list'>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
            </li>

            <li>
            <NavLink to="/country">
              Country
            </NavLink>
            </li>

            <li>
            <NavLink to="/about">
              About
            </NavLink>
            </li>

            <li>
            <NavLink to ="/contact">
              Contact
            </NavLink>
            </li> 
        </ul>
      </nav>
    </header>
  )
}

export default Headers
