import React from 'react';
import './Features.css';
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import vid2 from '../assets/vid2.m4v'

function Features() {
  return (
    <div className="features">
      <div className="page">
        <div className="page-text">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.</p>
        </div>
        <div className="page-img">
          <img src={pic1} alt="image1" />
        </div>
      </div>
      <hr />
      <div className="page">
        <div className="page-img">
          <img src={pic2} alt="image2" />
        </div>
        <div className="page-text">
          <h2>Download your shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <hr />
      <div className="page">
        <div className="page-text">
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="page-img">
          <video src={vid2} playsInline autoPlay muted loop id="vid"></video>
          <img src={pic3} alt="image3" />
        </div>
      </div>
      <hr />
      <div className="page">
        <div className="page-img">
          <img src={pic4} alt="image4" />
        </div>
        <div className="page-text">
          <h2>Create profiles for kids</h2>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
