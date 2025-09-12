import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top-row">
        <div className="footer-copyright">
          © 2025 Nanak Duct Cleaning. All rights reserved.
        </div>
      </div>
      <div className="footer-designed-by">
        Designed By <a href="https://www.orqueinnovations.com" target="_blank" rel="noopener noreferrer">Orque Innovations LLP</a>
      </div>
    </footer>
  );
};

export default Footer;