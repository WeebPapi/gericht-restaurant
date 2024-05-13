import React from 'react';

import './Navbar.css';
import images from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false)
return(
    <nav className='gericht__navbar'>
      <div className='gericht__navbar-logo'>
        <img src={images.gericht} alt='Gericht Logo' />
      </div>   
      <ul className='gericht__navbar-links'>
          <li>Home</li>
          <li>Pages</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Landing</li>
      </ul>
      <div className='gericht__navbar-signup'>
          <p>Log in / Registration</p>
          <div className='gericht__navbar-signup_bar'></div>
          <p>Book Table</p>
      </div>
      <div className='gericht__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && 
          (<div className='gericht__navbar-smallscreen-links-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='gericht__navbar-smallscreen-links'>
              <li>Home</li>
              <li>Pages</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Landing</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
)};

export default Navbar;
