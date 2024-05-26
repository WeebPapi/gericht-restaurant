import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
const scrollRef = React.useRef(null)

const imgs = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const scroll = (direction) =>{
  const {current} = scrollRef

  if(direction==='left') {
    current.scrollLeft -= 300
  }else {
    current.scrollLeft += 300
  }
}

return (  
  <div className='gericht__gallery app__bg section__padding'>
    <div className='gericht__gallery_content'>
      <SubHeading title='Instagram'/>
      <h2 className='headtext__cormorant'>Photo Gallery</h2>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='gericht__gallery_images'>
      <div className='gericht__gallery_images_container' ref={scrollRef}>
        {imgs.map((img, index) => (
          <div>
            <img src={img} key={index} />
            <BsInstagram className='gallery_icon'/>
          </div>
        ))}
      </div>
      <div className='gericht__gallery_images_buttons'>
        <BsArrowLeftShort className='gericht__gallery_arrow_icon' onClick={() => scroll('left')}/>
        <BsArrowRightShort className='gericht__gallery_arrow_icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>)
}


export default Gallery;
