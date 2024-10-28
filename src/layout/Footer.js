import React from 'react';

const icons = {
  facebook: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxOMUNq_G-2Tqqcm2l1UYB3WCjRHx6KI2xg&s',
  linkedin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ7ih0RMvWGQ4X98WXAZofSI-cGiWSFs-5Q&s',
  instagram: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wot8HpoxoAWWdHFD72xQRAH57lKyIVEFhw&s',
  x: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-EbJVMxRYtNz1i4dn7jOVSfHq-002oe4w&s',
};

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-and-conditions"> Terms and Conditions</a>
        </p>
        <p>Vizo Software Solutions</p>
        <p>&copy; 2024 Vizo Software Solutions - All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={icons.facebook} alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={icons.linkedin} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={icons.instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={icons.x} alt="X (Twitter)" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .app-footer {
          background-color: #333;
          color: white;
          padding: 20px;
          text-align: center;
        }
        
        .footer-content {
          margin: 10px 0;
        }
        
        .footer-content a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
        }
        
        .footer-content a:hover {
          text-decoration: underline;
        }

        .social-icons {
          margin-top: 10px;
        }

        .social-icons img {
          width: 24px; 
          height: 24px; 
          margin: 0 5px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
