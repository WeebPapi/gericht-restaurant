import React from 'react';

import {images, data} from '../../constants'

import './Laurels.css';
import {SubHeading, Laurel} from '../../components'

const awards = data.awards

const Laurels = () => (
  <div className='gericht__laurels app__bg section__padding flex__center'>
    <div className='gericht__laurels_logo'>
      <img src={images.logo} alt='logo'/>
    </div>
    <div className='gericht__laurels_body'>
      <div className='gericht__laurels_body-text'>
        <div className='gericht__laurels_body-text_heading'>
          <SubHeading title='Awards & recognition' />
          <h2 className='headtext__cormorant'>Our Laurels</h2>
        </div>
        <div className='gericht__laurels_body-text_grid'>
          {awards.map((award, index) => (
            <Laurel imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} key={award.title + index} />
          ))}
        </div>
      </div>
      <div className='gericht__laurels_body-image flex__center'>
        <img src={images.laurels} alt='Laurels Pic'/>
      </div>
    </div>
  </div>
);

export default Laurels;
