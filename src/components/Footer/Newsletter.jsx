import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter" id="newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Reservation" />      
      <h1 className="headtext__cormorant">Contact for Reservation</h1>
      <p className="p__opensans">Leave your number or email so that Our management will call you...</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address or phone number" />
      <button type="button" className="custom__button">Submit</button>
    </div>
  </div>
);

export default Newsletter;
