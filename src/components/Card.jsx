import React, { useEffect } from 'react';

import "./style.css"

const Card = ({getSrc}) => {


  return (
    <div className='card' >

      <img src={getSrc} alt={getSrc} />
    </div>
  )
};

export default Card;
