import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>📞 Contact Us</h1>
        <p>Get in touch for queries, support or result updates</p>
      </div>

      <div className="contact-wrap">
        <div className="contact-cards">
          <a className="contact-card" href="tel:+919950146847">
            <span className="cc-icon">📞</span>
            <div><strong>Call Us</strong><p>+91 99501 46847</p></div>
          </a>
          <a className="contact-card" href="https://wa.me/919950146847" target="_blank" rel="noreferrer">
            <span className="cc-icon">💬</span>
            <div><strong>WhatsApp</strong><p>Chat with us on WhatsApp</p></div>
          </a>
          <a className="contact-card" href="mailto:support@sattamatkajodi.com">
            <span className="cc-icon">✉️</span>
            <div><strong>Email</strong><p>support@sattamatkajodi.com</p></div>
          </a>
          <a className="contact-card" href="https://sattamatkajodi.com" target="_blank" rel="noreferrer">
            <span className="cc-icon">🌐</span>
            <div><strong>Website</strong><p>sattamatkajodi.com</p></div>
          </a>
        </div>

        <div className="disclaimer-box">
          <h3>⚠️ Disclaimer</h3>
          <p>
            Satta Matka involves financial risk. This website is for informational and
            entertainment purposes only. We do not promote or encourage gambling.
            Please play responsibly and be aware of the laws in your region.
            If you or someone you know has a gambling problem, please seek help.
          </p>
        </div>
      </div>
    </div>
  );
}
