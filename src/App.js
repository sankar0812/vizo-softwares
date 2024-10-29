import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ElevateAppBar from './layout/Navbar';
import Home from './layout/Home';
import Modal from './components/Model'; 
import Footer from './layout/Footer';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import Services from './pages/Services';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <>
          <ElevateAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <div className="floating-message-icon" onClick={() => setIsModalOpen(true)}>
            <i className="fas fa-comment-dots"></i>
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <Footer />
        </>
    </Router>
  );
};

export default App;
