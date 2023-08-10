import React from 'react';
import '../style/Footer.css'

const Footer = () => {
  return (
    <footer className='container-footer'>
      <div className="footer-column">
      <img src="https://www.cphi-online.com/Peppermint%20Horizontal%20Logo-comp306998.png" alt="logo" className="logo"/>
      <p>
      Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021</p>
        <p>info@getpeppermint.co</p>
        <p>+91 89567 10044</p>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Send us a Message</h4>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Your message"></textarea>
        <button>Send</button>
      </div>
    </footer>
  );
};

export default Footer;
