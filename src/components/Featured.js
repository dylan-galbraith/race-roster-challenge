import React from 'react'
import image from '../assets/images/heart-lamps.png';

export default function Featured() {
  return (
    <div className="featured">
      <img src={image} alt="Floating Heart Lanterns" />
      <div className="featured__content">
        <h2 className="featured__heading">Make your ticket holders happy</h2>
        <p className="featured__text">A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is just let them happen.</p>
        <p className="featured__text">Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip. That easy.</p>
        <p className="featured__text"><a href='#'>View full feature list</a></p>
      </div>
    </div>
  )
}
