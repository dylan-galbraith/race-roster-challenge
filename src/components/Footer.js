import React from 'react'
import facebook from '../assets/logos/2.svg';
import twitter from '../assets/logos/1.svg';
import instagram from '../assets/logos/3.svg';

export default function Footer() {

  const today = new Date();

  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__content">
          <p className="footer__heading">FEATURES</p>
          <p className="footer__text"><a href="#">Event organizer tools</a></p>
          <p className="footer__text"><a href="#">Timer tools</a></p>
          <p className="footer__text"><a href="#">Charity co-ordinator tools</a></p>
          <p className="footer__text"><a href="#">Participant experience</a></p>
        </div>
        <div className="footer__content">
          <p className="footer__heading">TOOLS</p>
          <p className="footer__text"><a href="#">Dashboard maker</a></p>
          <p className="footer__text"><a href="#">Data &amp; analytics</a></p>
          <p className="footer__text"><a href="#">Email marketing tool</a></p>
          <p className="footer__text"><a href="#">Social promotion tool</a></p>
        </div>
        <div className="footer__content">
          <p className="footer__heading">CONTACT</p>
          <p className="footer__text">1-888-555-5555</p>
          <p className="footer__text">example@example.com</p>
          <p className="footer__text">123 Fake Street, London, ON</p>
          <p className="footer__text">A1B 2C3</p>
        </div>
        <div className="footer__content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.835307889371!2d-81.25372648452392!3d42.98174277914997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21d8c9d59fb%3A0xa637ea9287d6c236!2s103%20King%20St%2C%20London%2C%20ON%20N6A%206K1!5e0!3m2!1sen!2sca!4v1624674554186!5m2!1sen!2sca" width="600" height="450" style={{border:0}}allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      <div className="footer__row footer__row--bottom"> 
        <p>© Copyright Acme Inc. {today.getFullYear()}</p>
        <div>
          <img className="footer__icon" src={facebook} alt="facebook icon" />
          <img className="footer__icon" src={twitter} alt="facebook icon" />
          <img className="footer__icon" src={instagram} alt="facebook icon" />
        </div>
      </div>  
    </div>
  )
}
