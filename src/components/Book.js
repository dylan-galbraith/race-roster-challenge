import React, { useState } from 'react'
import image from '../assets/images/event-picture.png';
import loading from '../assets/logos/loading.svg';
import complete from '../assets/logos/complete.svg';

export default function Book() {

  const [status, setStatus] = useState('unsubmitted')

  function handleForm(e) {
    e.preventDefault();
    if (e.target.firstName.value && e.target.lastName.value && e.target.email.value && e.target.phone.value) {
      setStatus("loading");
      setTimeout(function(){ setStatus("complete") }, 3000);
    }

    if (!e.target.firstName.value) {
      e.target.firstName.classList.add("book__error");
      document.getElementById('firstName').classList.remove('book__hidden');
    }
    if (!e.target.lastName.value) {
      e.target.lastName.classList.add("book__error");
      document.getElementById('lastName').classList.remove('book__hidden');
    }
    if (!e.target.email.value) {
      e.target.email.classList.add("book__error");
      document.getElementById('email').classList.remove('book__hidden');
    }
    if (!e.target.phone.value) {
      e.target.phone.classList.add("book__error");
      document.getElementById('phone').classList.remove('book__hidden');
    }
  }

  function resetForm() {
    setStatus('unsubmitted')
  }

  if (status === "unsubmitted") {
    return (
      <div className="book" id="bookForm">
        <div className="book__content">
          <h2 className="book__heading">Book a demo</h2>
          <p className="book__text">Fields marked with a <span className="book__star">*</span> are required</p>
          <form onSubmit={handleForm} className="book__form">
            <label className="book__label" for="firstName">First Name <span className="book__star">*</span></label>
            <input className="book__input" name="firstName"/>
            <span id="firstName" className="book__errorMessage book__hidden">First name is required</span>
  
            <label className="book__label" for="lastName">Last Name <span className="book__star">*</span></label>
            <input className="book__input" name="lastName"/>
            <span id="lastName" className="book__errorMessage book__hidden">Last name is required</span>
  
            <label className="book__label" for="email">Email <span className="book__star">*</span></label>
            <input className="book__input" name="email"/>
            <span id="email" className="book__errorMessage book__hidden">Email is required</span>
  
            <label className="book__label" for="phone">Phone Number <span className="book__star">*</span></label>
            <input className="book__input" name="phone"/>
            <span id="phone" className="book__errorMessage book__hidden">Phone number is required</span>
  
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

  if (status === "loading") {
    return (
      <div className="book" id="bookForm">
        <div className="book__content">
          <h2 className="book__heading">Book a demo</h2>
          <p className="book__text">Fields marked with a <span className="book__star">*</span> are required</p>
          <p className="book__text book__loading"><img src={loading} alt="loading icon"/> Submitting...</p>
        </div>
        <img className="book__image" src={image} alt="Celebration" />
      </div>
    )
  
  }

  if (status === "complete") {
    return (
      <div className="book" id="bookForm">
        <div className="book__content">
          <h2 className="book__heading">Book a demo</h2>
          <p className="book__text">Fields marked with a <span className="book__star">*</span> are required</p>
          <div className="book__complete">
            <div className="book__checkmark">
              <img src={complete} alt="check mark" />
            </div>
            <div>
              <h2 className="book__heading">Demo request sent!</h2>
              <p className="book__text">Someone will reach out to schedule your demo within the next 48 business hours</p>
              <p className="book__text"><a href="#bookForm" onClick={resetForm}>Request another demo</a></p>
            </div>
          </div>
        </div>
        <img className="book__image" src={image} alt="Celebration" />
      </div>
    )
  
  }
}
