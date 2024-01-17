// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Ml from './Ml';
import Game from './Game';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Ml />} />
          <Route path="game" element={<Game />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
