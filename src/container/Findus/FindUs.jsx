import React from 'react';
import './FindUs.css'
import {SubHeading} from '../../components'
import {images} from '../../constants'

const FindUs = () => (
  <div className='gericht__findus section__padding flex__center app__bg'>
    <div className='gericht__findus_text'>
      <div className='gericht__findus_text-heading'>
        <SubHeading title='Contact'/>
        <h2 className='headtext__cormorant'>Find Us</h2>
      </div>
      <div className='gericht__findus_text-address'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div className='gericht__findus_text-address-times'>
          <h5 className='headtext__cormorant'>Opening Hours</h5>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>
      <button type='button' className='custom__button'>Visit Us</button>
    </div>
    <div className='gericht__findus_image'>
      <img  src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
