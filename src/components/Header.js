import React from 'react'
import logo from '../assets/logos/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Generic Logo" />
      <div className="header__buttons">
        <button className="header__buttons__login">LOG-IN</button>
        <button className="header__buttons__signup">SIGN-UP</button>
      </div>
    </header>
  )
}
