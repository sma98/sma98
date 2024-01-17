 import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Menu from './Menu';
import './style/Navbar.css'





export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <a href='/sma98' className='site-title'>Sma98</a>
      <ul>
        <Menu toggleMenu={toggleMenu} />
        </ul>
    </nav>
  );
}

