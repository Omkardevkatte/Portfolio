import React, { useState } from 'react'
import './Navbar.css';
import giticon from '../../../public/github.png'
import linkedin from '../../../public/linkedin.png'

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const Navbar = () => {

    const[menuOpen, SetMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        <a href="/" className='title'>Omkar_Devkatte</a>
        <div className='menu'>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars } onClick={()=> SetMenuOpen(!menuOpen)} className='menu-icon' />
            <ul className={`menu-items ${menuOpen ? "menuOpen" : ""}`} onClick={()=> SetMenuOpen(false)}>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#Experience">Experience</a> </li>
                <li> <a href="#Projects">Projects</a> </li>
                <li> <a href="#Contact">Contact</a> </li>
            </ul>
            <a target='_blank' href="https://github.com/Omkardevkatte"><img src={giticon} alt="" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/omkar-devkatte"> <img src={linkedin} alt="" /> </a>
        </div>
    </nav>
  )
}

export default Navbar