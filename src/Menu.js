import React from 'react';
import { Link } from "react-router-dom";

function Menu({ toggleMenu }) {
  return (
    <>
 
      <a onClick={toggleMenu}>Menu</a>
      <img src="/menu.jpg" alt="Menu" />
      <ul>
        <li>
          <Link to='/Ml'>Ml</Link>
        </li>
        <li>
          <Link to='/Game'>Game</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
