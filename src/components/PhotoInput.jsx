import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';



const PhotoInput = ({getSrc,setSrc,getInputs, setInputs}) => {
    
    function getData(){
        const src = image.current.value
        setInputs(src)

    }
    
    useEffect(() => {
        fetch("http://localhost:8080")
            .then(res => res.json())
            .then(data => setSrc(data))
    },[])
    const image = useRef()

  return (
    <div>
        <form>
            <h1>{getInputs}</h1>
            <input type="text" onChange={getData} placeholder='Enter image url' ref={image} />
            <button onClick={getData} >Submit</button>
        </form>

        {getSrc && getSrc.map((item) => <Card getSrc={item.image} /> )}
        
    </div>
  )
}

export default PhotoInput;
