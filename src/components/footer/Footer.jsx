import React from 'react';
import './footer.css';
import Logo from '../../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <img src={Logo} alt="manesh" />
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
         
          <a
            href="https://github.com/Maneshnarayanan"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https:www.linkedin.com/in/manesh-narayanan"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Manesh K. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
