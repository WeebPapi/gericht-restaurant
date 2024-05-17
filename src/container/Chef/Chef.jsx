import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='gericht__chef section__padding app__bg'>
    <div className='gericht__chef_image'>
      <img src={images.chef} alt='chef'/>
    </div>
    <div className='gericht__chef_text'>
      <div className='gericht__chef_text_heading'>
      <SubHeading title='Chef’s Word'/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      </div>
      <div className='gericht__chef_text_paragraphs'>
        <img className='gericht__chef_text_quotes' src={images.quote}/>
        <p className='gericht__chef__text_comment p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className='gericht__chef_text_identity'>
        <h2 className='headtext__cormorant'>Kevin Luo</h2>
        <p className='p__opensans'>Chef & Founder</p>
      </div>
      <div className='gericht__chef_text_signature'>
        <img src={images.sign}/>
      </div>
    </div>
  </div>
);

export default Chef;
