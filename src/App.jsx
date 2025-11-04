import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Service from './pages/Service';
import Company from './pages/Company';
import Career from './pages/Career'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/service" element={<Service />} />
            <Route path="/company" element={<Company />} />
            <Route path="/career" element={<Career />} /> 
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;