import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css";

function Menu() {
  return (
    <nav class='menu'>
        <ul>
            <NavLink activeclassname="active" to="/Homepage">Home</NavLink>
            <NavLink activeclassname="active" to="/Works" >Works</NavLink>
            <NavLink activeclassname="active" to="/Events">Events</NavLink>
            <NavLink activeclassname="active" to="/ContactMe">Contact Me</NavLink>
        </ul>  
    </nav>
  )
}

export default Menu
