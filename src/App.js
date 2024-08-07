import './App.css';
import './custom.css';
// import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Food from './components/Food';
import Drink from './components/Drink';
import Touch from './components/Touch';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Drink" element={<Drink />} />
        <Route path="/Touch" element={<Touch />} />
      </Routes>
    </Router>
  );
}

export default App;

