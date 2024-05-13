import React from 'react';
import {SubHeading, MenuItem} from '../../components'
import {images, data} from '../../constants'

import './SpecialMenu.css';

const wines = data.wines
const cocktails = data.cocktails

const SpecialMenu = () => (
  <div className='gericht__specialmenu flex__center section__padding'id='menu'>
    <div className='gericht__specialmenu-title'>
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>
    <div className='gericht__specialmenu_menu'>
      <div className='gericht__specialmenu_menu-wine'>
        <p className='p__cormorant'>Wine & Beer</p>
        {wines.map((item, index) => (
          <MenuItem title={item.title} tags={item.tags} price={item.price} key={item.title + index}/>
        ))}
      </div>
      <div className='gericht__specialmenu_menu_image flex__center'>
        <img src={images.menu} alt='wine_bottle' />
      </div>
      <div className='gericht__specialmenu_menu-cocktails'>
      <p className='p__cormorant'>Cocktails</p>
      {cocktails.map((item, index) => (
          <MenuItem title={item.title} tags={item.tags} price={item.price} key={item.title + index}/>
        ))}
      </div>
    </div>
    <button type='button' className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
