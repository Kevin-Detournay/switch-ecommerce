import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">

      <div className="footer__buttons">
        <Link to="/nous-contacter">
          <div className="footer__buttons__btn">Nous contacter
          </div>
        </Link>
        <Link to="/a-propos-de-nous">
          <div className="footer__buttons__btn">A propos de nous
          </div>
        </Link>
        <Link to="/mentions-legales">
          <div className="footer__buttons__btn">Mentions légales
          </div>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;