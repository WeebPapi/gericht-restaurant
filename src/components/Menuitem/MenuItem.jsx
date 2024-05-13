import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='gericht__menuitem'>
    <div className='gericht__menuitem_top'>
      <p className='gericht__menuitem_info_heading p__cormorant'>{title}</p>
      <div className='gericht__menuitem_bar'></div>
      <p className='gericht__menuitem_price p__cormorant'>{price}</p>
    </div>
    <div className='gericht__menuitem_bottom'>
      <p className='gericht__menuitem_info_tags p__opensans'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
