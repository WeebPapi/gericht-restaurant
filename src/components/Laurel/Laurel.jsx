import React from 'react'

import './Laurel.css'

const Laurel = ({imgUrl, title, subtitle}) => {
  return (
    <div className='gericht__laurel'>
        <img src={imgUrl}/>
        <div className='gericht__laurel_text'>
            <h5 className='headtext__cormorant'>{title}</h5>
            <p className='p__opensans'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Laurel