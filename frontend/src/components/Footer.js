import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/style.css'

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
      <div className="common-links">
        <a href="/about">About</a><br/>
        <a href="/contact">Contact</a><br/>
        <a href="/privacy-policy">Privacy Policy</a><br/>
      </div>
      <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

