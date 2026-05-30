import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Path sudah diperbaiki: menghapus pengulangan nama folder
import Home from './pages/Home/Home.jsx';
import About from './pages/Home/About/about.jsx'; 
import Portofolio from './pages/Home/Portofolio/porto.jsx'; 
import Contact from './pages/Home/Contact/contact.jsx';

// Import Navbar (yang di dalamnya sudah ada footer persegi panjang)
import Navbar from './components/Navbar/Navbar/Navbar.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar (beserta footer bawahnya) akan selalu muncul */}
        <Navbar />

        {/* Routes untuk mengatur perpindahan konten di tengah layar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Tidak perlu ada <Footer /> di sini lagi */}
      </div>
    </Router>
  );
}

export default App;