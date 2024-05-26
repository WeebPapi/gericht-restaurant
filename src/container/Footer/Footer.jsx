import React from 'react';
import { Newsletter } from '../../components'
import images from '../../constants/images'
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

import './Footer.css';

const Footer = () => (
  <div className='gericht__footer section__padding app__bg flex__center'>
    <Newsletter />
    <div className='gericht__footer_text'>
      <div className='gericht__footer_text-contact'>
        <h4 className='headtext__cormorant'>Contact Us</h4>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230 <br/> +1 212-555-1230 </p>
      </div>
      <div className='gericht__footer_text-logo'>
        <h2 className='headtext__cormorant'>GERICHT</h2>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon}/>
        <div className='gericht__footer_text-logo_icons'>
          <FaFacebookF />
          <FiTwitter />
          <BsInstagram />
        </div>
      </div>
      <div className='gericht__footer_text-hours'>
        <h4 className='headtext__cormorant'>Working Hours</h4>
        <p className='p__opensans'>Monday-Friday:<br/>
                                  08:00 am -12:00 am
        </p>
        <p className='p__opensans'>Saturday-Sunday:<br/>
07:00am -11:00 pm                   
        </p>
      </div>
    </div>
      <p className='p__opensans flex__center gericht__footer-trademark'>2021 Gerícht. All Rights reserved.</p>
  </div>
);

export default Footer;
