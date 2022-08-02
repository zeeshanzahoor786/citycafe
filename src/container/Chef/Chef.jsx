import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I would love to offer my services to you</p>
        </div>
        <p className="p__opensans">  "If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart."</p>
      </div>

      <div className="app__chef-sign">
        <p>Sundus Sidiqqi</p>
        <p className="p__opensans">Chef & Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;
