import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; 
import Solutions from './components/Solutions'; 
import Contact from './components/Contact'; 
import ChargeLocator from './components/ChargeLocator'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/chargelocator" element={<ChargeLocator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;









