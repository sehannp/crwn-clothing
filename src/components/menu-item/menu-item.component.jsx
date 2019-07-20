import React from 'react';
import './menu-item.styles.scss';

//destructured props used
const MenuItem = ({title, imageUrl, size})=> (
  <div
    className={`${size} menuitem`}
    className='menu-item'
  >

   <div className="background-image" style = {
     {backgroundImage: `url(${imageUrl})`}
   }
   >
   </div>

    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)


export default MenuItem
