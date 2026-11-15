import React from 'react';
import myBgImg from './assets/my-bg.jpg';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Laptop, 
  Heart, 
  Rocket, 
  ArrowRight, 
  GraduationCap 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="mobile-container">
      {/* Navigation Header */}
      <header className="header">
        <div className="logo">
          Tech <span className="logo-accent">4</span> Youth
        </div>
        <nav className="nav-links">
          <Link to="/" className="active-link">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge">
          🚀 Free for every young learner
        </div>
        <h1 className="hero-title">
          Empowering the <br />
          Next Generation of <br />
          <span className="highlight">Software Developers</span>
        </h1>
        <p className="hero-description">
          Learn to code by building real things. Five core courses, thousands of students, and a community that has your back — from your first HTML tag to full-stack apps.
        </p>

        <div className="button-group">
          <Link to="/courses" className="btn-primary">
            <GraduationCap size={18} /> Explore Courses
          </Link>
          <Link to="/register" className="btn-secondary">
            Join Now <ArrowRight size={16} />
          </Link>
        </div>

        <div className="hero-image-card">
          <img 
            src={myBgImg} 
            alt="Code Banner" 
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <span className="section-label">WHY CHOOSE US</span>
        <h2 className="section-title">Why Tech for Youth?</h2>
        <p className="section-subtitle">
          Built by developers who started exactly where you are — curious, ambitious, and ready to build.
        </p>

        <div className="cards-container">
          <div className="card">
            <div className="icon-wrapper icon-blue">
              <Laptop size={20} />
            </div>
            <h3 className="card-title">Project-based learning</h3>
            <p className="card-text">
              Every track ends with real projects you build, break, and fix — no passive theory state-mind, just code you can show off.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper icon-purple">
              <BookOpen size={20} />
            </div>
            <h3 className="card-title">Free video tracks</h3>
            <p className="card-text">
              Curated, full-length video courses for every step of your journey completely free, forever, on-every device.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper icon-green">
              <Heart size={20} />
            </div>
            <h3 className="card-title">Local community support</h3>
            <p className="card-text">
              Study groups, hackathons, and mentor sessions with young developers in your area who have your back.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-icon-wrapper">
          <Rocket size={24} />
        </div>
        <h2 className="cta-title">Your coding journey starts today</h2>
        <p className="hero-description">
          Create a free account, pick your track, and start building — your first project is one click away.
        </p>

        <div className="button-group">
          <Link to="/register" className="btn-primary">
            Join Now <ArrowRight size={16} />
          </Link>
          <Link to="/courses" className="btn-secondary">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Tech for Youth. All rights reserved.
      </footer>
    </div>
  );
}