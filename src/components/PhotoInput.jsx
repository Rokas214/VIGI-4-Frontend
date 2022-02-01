import React, { useRef, useState } from 'react';
import Card from './Card';



const PhotoInput = ({getSrc,setSrc}) => {
 
    const image = useRef()

    function getData(){
        const src = image.current.value
        setSrc(src)
    }

  return (
    <div>
        <input type="text" placeholder='Enter image url' ref={image} />
        <button onClick={getData} >Submit</button>
        <Card getSrc={getSrc} />
        
    </div>
  )
};

export default PhotoInput;
