import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav class='menu'>
        <NavLink activeclassname="active" to="/Homepage">Home</NavLink>
        <NavLink activeclassname="active" to="/Works" >Works</NavLink>
        <NavLink activeclassname="active" to="/Events">Events</NavLink>
        <NavLink activeclassname="active" to="/ContactMe">Contact Me</NavLink>
    </nav>
  )
}

export default Menu
