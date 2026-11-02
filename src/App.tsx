import React, { useState } from 'react';
import Home from './screens/Home';
import Results from './screens/Results';
import Contact from './screens/Contact';
import './App.css';

type Page = 'home' | 'results' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      {/* Top Bar */}
      <div className="topbar">
        <span>📞 +91 99501 46847</span>
        <span>✉️ support@sattamatkajodi.com</span>
        <span>🕐 Results updated every 60 seconds</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setPage('home')}>
          <span className="brand-icon">🎯</span>
          <div>
            <div className="brand-name">SATTA MATKA JODI</div>
            <div className="brand-sub">India's Fastest Result Site</div>
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className={page === 'home' ? 'active' : ''} onClick={() => { setPage('home'); setMenuOpen(false); }}>🏠 Home</li>
          <li className={page === 'results' ? 'active' : ''} onClick={() => { setPage('results'); setMenuOpen(false); }}>🏆 Results</li>
          <li className={page === 'contact' ? 'active' : ''} onClick={() => { setPage('contact'); setMenuOpen(false); }}>📞 Contact</li>
          <li><a href="https://sattamatkajodi.com" target="_blank" rel="noreferrer">🌐 Official Site</a></li>
        </ul>
      </nav>

      {/* Marquee */}
      <div className="marquee-bar">
        <div className="marquee-track">
          🔴 Welcome to Satta Matka Jodi &nbsp;|&nbsp; India's Fastest Result &nbsp;|&nbsp;
          Kalyan • Milan • Rajdhani • Main Bazar &nbsp;|&nbsp; Play Responsibly &nbsp;|&nbsp;
          Results Updated Live Every 60 Seconds &nbsp;|&nbsp;
        </div>
      </div>

      {/* Page Content */}
      <main className="main-content">
        {page === 'home' && <Home />}
        {page === 'results' && <Results />}
        {page === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>🎯 Satta Matka Jodi</h3>
            <p>India's most trusted platform for live Satta Matka results. Fast, accurate, and updated every minute.</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => setPage('home')}>Home</li>
              <li onClick={() => setPage('results')}>Today's Results</li>
              <li onClick={() => setPage('contact')}>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Markets</h3>
            <ul>
              <li>Kalyan</li>
              <li>Milan Day / Night</li>
              <li>Rajdhani Day / Night</li>
              <li>Main Bazar</li>
              <li>Time Bazar</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>📞 +91 99501 46847</li>
              <li>✉️ support@sattamatkajodi.com</li>
              <li><a href="https://sattamatkajodi.com" target="_blank" rel="noreferrer">🌐 sattamatkajodi.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 SattaMatkaJodi.Com — All Rights Reserved</p>
          <p className="disclaimer">⚠️ Disclaimer: This website is for entertainment and informational purposes only. We do not promote gambling. Play responsibly.</p>
        </div>
      </footer>
    </div>
  );
}
