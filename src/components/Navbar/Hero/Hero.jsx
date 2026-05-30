import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link dari react-router-dom
import './Hero.css';
import heroImage from '../../../assets/images/hero-3d-illustration.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        {/* Sisi Kiri: Teks */}
        <div className="hero-content">
          <h3 className="hero-subtitle">Portofolio</h3>
          <h1 className="hero-title">Desi Ainul<br/>Amelia</h1>
          <p className="hero-description">
            Expertise in full-stack development, machine learning models, 
            and efficient data architecture.
          </p>
          <div className="hero-btns">
            {/* 2. Ubah button menjadi Link dan arahkan rutenya */}
            <Link to="/portfolio" className="btn-primary flex items-center justify-center">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Sisi Kanan: Gambar */}
        <div className="hero-image">
          <img src={heroImage} alt="3D Dashboard Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;