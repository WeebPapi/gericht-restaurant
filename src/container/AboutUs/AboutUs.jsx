import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='gericht__aboutus app__bg flex__center section__padding' id='about'>
    <div className='gericht__aboutus-overlay flex__center'>
      <img src={images.G} alt='letter g'/>
    </div>
    <div className='gericht__aboutus-content flex__center'>
      <div className='gericht__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>\
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='gericht__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>
      <div className='gericht__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>\
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
