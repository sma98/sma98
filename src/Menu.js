import React from 'react';
import { Link } from "react-router-dom";

function Menu({ toggleMenu }) {
  return (
    <>
      {/* eslint-disable-next-line */}
      <a onClick={toggleMenu} className="menu-link">
        Menu
        <img src="sma98/assests/s.png" alt="Menu" />
      </a>
      <ul>
        <li>
          <Link to='/ml'>Ml</Link>
        </li>
        <li>
          <Link to='/game'>Game</Link>
        </li>
        <li>
          <Link to='sma98/about'>About</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
