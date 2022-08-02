import React from 'react';
import { Navbar } from '../../components';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Let's Eat together" />
      <h1 className="app__header-h1">Order food and Have Fun</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At City club, the rich Pakistani culture and heritage is highlighted in our diversifying flavours from across the country. Our Empress and Sultan Boardrooms now provide the perfect space for corporate lunch meetings or a nice relaxing dinner. </p>
     
      <a href="#menu" className="custom__button">
      Explore Menu
      </a>
    
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
