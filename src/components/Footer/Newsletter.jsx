import React from 'react';

import {SubHeading} from '../../components'

import './Newsletter.css';

const Newsletter = () => (
  <div className='gericht__footer_newsletter'>
    <div className='gericht__footer_newsletter-heading'>
      <SubHeading title='newsletter' />
      <h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='gericht__footer_newsletter-input'>
      <input type='input' placeholder='Email Address'></input>
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
