import React from 'react'
import image from '../assets/images/event-picture.png';

export default function Book() {
  return (
    <div className="book">
      <div className="book__content">
        <h2 className="book__heading">Book a demo</h2>
        <p className="book__text">Fields marked with a <span className="book__star">*</span> are required</p>
        <form className="book__form">
          <label className="book__label" for="firstName">First Name <span className="book__star">*</span></label>
          <input className="book__input" name="firstName"/>

          <label className="book__label" for="lastName">Last Name <span className="book__star">*</span></label>
          <input className="book__input" name="lastName"/>

          <label className="book__label" for="email">Email <span className="book__star">*</span></label>
          <input className="book__input" name="email"/>

          <label className="book__label" for="phone">Phone Number <span className="book__star">*</span></label>
          <input className="book__input" name="phone"/>

          <p className="book__label" for="phone">Preferred method of contact</p>
          <div className="book__radio">
            <input type="radio" name="contact" value="email"
                  checked/>
            <label for="contact"> Email</label>
          </div>
          <div className="book__radio">
            <input type="radio" name="contact" value="phone"/>
            <label for="contact"> Phone</label>
          </div>
          <button className="book__button">SIGN UP</button>
        </form>
      </div>
      <img className="book__image" src={image} alt="Celebration" />
    </div>
  )
}
