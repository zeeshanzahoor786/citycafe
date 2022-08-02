import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <div className='zee1'>
        <p className="p__opensans">Pakistani dining experience by the group of Yum and English Tea House. Designed by the renowned hospitality consultant, Masood Ali Khan, City cafe is a celebration of Pakistani cuisine, comfortable ambiance, five star service and much needed, diversified, quality, Pakistani food.</p>
        </div>
        <a href="#newsletter" className="custom__button">
      Know More
      </a>
      </div>
      <div>

      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <div className='zee2'>
        <p className="p__opensans">City Cafe is yet another successful project of the Yum Group of Restaurants. Established in 2010, the Group first entered the culinary market of Kot Radha Kishan with Yum Chinese and Thai Restaurant. With immense success at the first Gulberg location, the group created a quaint and comfortable cafe</p>
        </div>
        <a href="#newsletter" className="custom__button">
      Know More
      </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
