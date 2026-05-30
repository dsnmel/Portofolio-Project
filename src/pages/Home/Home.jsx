import React from 'react';

// Sesuaikan path Hero karena posisinya ada di dalam folder Navbar
import Hero from '../../components/Navbar/Hero/Hero.jsx';       
import './Home.css';                                 

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
};

export default Home;