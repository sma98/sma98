import React from 'react';
import { Link } from "react-router-dom";

function Menu({ toggleMenu }) {
  return (
    <>
   <a onClick={toggleMenu} className="menu-link">
     
        Menu
        <img src="/public/images/menu.png" alt="enu" />
      </a>
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
