import React, { useState } from 'react'
import './Navbar.css';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const Navbar = () => {

    const[menuOpen, SetMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        <a href="/" className='title'>Portfolio</a>
        <div className='menu'>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars } onClick={()=> SetMenuOpen(!menuOpen)} className='menu-icon' />
            <ul className={`menu-items ${menuOpen ? "menuOpen" : ""}`} onClick={()=> SetMenuOpen(false)}>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#Experience">Experience</a> </li>
                <li> <a href="#Projects">Projects</a> </li>
                <li> <a href="#Contact">Contact</a> </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar