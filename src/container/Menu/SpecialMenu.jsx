import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Beverages</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
  <div className='hellomain'>
      <div className='hello1'>
      <p className="app__specialMenu-menu_heading">Burgers</p>
        <div className="app__specialMenu_menu_items">
          {data.burgers.map((burgers, index) => (
            <MenuItem key={burgers.title + index} title={burgers.title} price={burgers.price} tags={burgers.tags} />
          ))}
        </div>
      </div>
      <div className='hello2'>
      <p className="app__specialMenu-menu_heading">Desi</p>
        <div className="app__specialMenu_menu_items">
          {data.Desi.map((Desi, index) => (
            <MenuItem key={Desi.title + index} title={Desi.title} price={Desi.price} tags={Desi.tags} />
          ))}
        </div>
      </div>
      <div className='hello3'>
      <p className="app__specialMenu-menu_heading">BBQ</p>
        <div className="app__specialMenu_menu_items">
          {data.BBQ.map((BBQ, index) => (
            <MenuItem key={BBQ.title + index} title={BBQ.title} price={BBQ.price} tags={BBQ.tags} />
          ))}
        </div>
      </div>
      </div>
    
  </div>
);

export default SpecialMenu;
